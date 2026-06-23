"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Ring3D } from './Ring3D';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const BASE = 0.40;
const HERO_Y = -0.055;

const POSES = {
  HERO_POSE:   { px: 0,    py: 0,      pz: 0, rx: 0,            ry: 0,            rz: 0,            scale: BASE * 1.1 },
  about:       { px: +2.0, py: 0,      pz: 0, rx: Math.PI / 4,  ry: Math.PI,      rz: Math.PI / 6,  scale: BASE * 1.4 },
  benefits:    { px: -1.8, py: 0,      pz: 0, rx: -Math.PI / 6, ry: Math.PI * 2,  rz: -Math.PI / 4, scale: BASE * 1.5 },
  app:         { px: +0.6, py: 0.5,    pz: -1, rx: Math.PI / 8, ry: Math.PI * 3,  rz: Math.PI / 8,  scale: BASE * 1.0 },
  buy:         { px: 0,    py: -0.12,  pz: 0, rx: 0,            ry: Math.PI * 4,  rz: 0,            scale: BASE * 0.85, staticGlue: true },
};

export default function ScrollScene() {
  const ringRef = useRef<any>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [interactive, setInteractive] = useState(true);

  useEffect(() => {
    if (!wrapperRef.current) return;

    let ctx: any;
    let rafId: number;

    const initGsap = () => {
      if (!ringRef.current) {
        rafId = requestAnimationFrame(initGsap);
        return;
      }

      const group = ringRef.current;
      
      ctx = gsap.context(() => {
        // Set initial pose
        gsap.set(group.position, { x: POSES.HERO_POSE.px, y: POSES.HERO_POSE.py, z: POSES.HERO_POSE.pz });
        gsap.set(group.rotation, { x: POSES.HERO_POSE.rx, y: POSES.HERO_POSE.ry, z: POSES.HERO_POSE.rz });
        gsap.set(group.scale,    { x: POSES.HERO_POSE.scale, y: POSES.HERO_POSE.scale, z: POSES.HERO_POSE.scale });

        const animateTo = (pose: any) => {
          if (pose.staticGlue) {
            gsap.set(group.position, { x: pose.px, y: pose.py, z: pose.pz });
            gsap.set(group.rotation, { x: pose.rx, y: pose.ry, z: pose.rz });
            gsap.set(group.scale,    { x: pose.scale, y: pose.scale, z: pose.scale });
          } else {
            gsap.to(group.position, { x: pose.px, y: pose.py, z: pose.pz, duration: 0.7, ease: 'power3.inOut', overwrite: true });
            gsap.to(group.rotation, { x: pose.rx, y: pose.ry, z: pose.rz, duration: 0.7, ease: 'power3.inOut', overwrite: true });
            gsap.to(group.scale,    { x: pose.scale, y: pose.scale, z: pose.scale, duration: 0.7, ease: 'power3.inOut', overwrite: true });
          }
        };

        const triggers = [
          { id: '#about', pose: POSES.about, prevPose: POSES.HERO_POSE },
          { id: '#benefits', pose: POSES.benefits, prevPose: POSES.about },
          { id: '#app', pose: POSES.app, prevPose: POSES.benefits },
          { id: '#buy', pose: POSES.buy, prevPose: POSES.app },
        ];

        triggers.forEach((trigger) => {
          ScrollTrigger.create({
            trigger: trigger.id,
            start: "top center",
            onEnter: () => animateTo(trigger.pose),
            onLeaveBack: () => animateTo(trigger.prevPose)
          });
        });

        ScrollTrigger.create({
          trigger: '#unboxing',
          start: "top center",
          end: "bottom center",
          onEnter: () => gsap.to(wrapperRef.current, { opacity: 0, duration: 0.5, overwrite: true }),
          onLeaveBack: () => gsap.to(wrapperRef.current, { opacity: 1, duration: 0.5, overwrite: true }),
        });

        ScrollTrigger.create({
          trigger: '#buy',
          start: "top center",
          onEnter: () => gsap.to(wrapperRef.current, { opacity: 1, duration: 0.5, overwrite: true }),
          onLeaveBack: () => {
            gsap.to(wrapperRef.current, { opacity: 0, duration: 0.5, overwrite: true });
            animateTo(POSES.app);
          }
        });

        ScrollTrigger.create({
          trigger: '#testimonials',
          start: "top center",
          onEnter: () => {
            gsap.to(wrapperRef.current, { opacity: 0, duration: 0.5, overwrite: true });
            gsap.to(group.scale, { x: 0.3, y: 0.3, z: 0.3, duration: 0.5, overwrite: true });
          },
          onLeaveBack: () => {
            gsap.to(wrapperRef.current, { opacity: 1, duration: 0.5, overwrite: true });
            animateTo(POSES.buy);
          }
        });

        ScrollTrigger.create({
          trigger: '#premium-banner',
          start: "top center",
          onEnter: () => gsap.set(wrapperRef.current, { visibility: 'hidden' }),
          onLeaveBack: () => gsap.set(wrapperRef.current, { visibility: 'visible' }),
        });
      });
    };

    initGsap();

    const updateInteractive = () => {
      const hero = document.querySelector('#hero');
      const buy = document.querySelector('#buy');
      const hRect = hero?.getBoundingClientRect();
      const bRect = buy?.getBoundingClientRect();
      
      const vh = window.innerHeight;
      const hActive = hRect && (hRect.top < vh * 0.7 && hRect.bottom > vh * 0.3);
      const bActive = bRect && (bRect.top < vh * 0.7 && bRect.bottom > vh * 0.3);
      
      setInteractive(!!hActive || !!bActive);
    };

    window.addEventListener('scroll', updateInteractive, { passive: true });
    ScrollTrigger.addEventListener('refresh', updateInteractive);
    updateInteractive();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', updateInteractive);
      ScrollTrigger.removeEventListener('refresh', updateInteractive);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div ref={wrapperRef} className={cn("ring-canvas", interactive ? "ring-canvas-interactive" : "")}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <Ring3D ref={ringRef} spinning={true} />
      </Canvas>
    </div>
  );
}
