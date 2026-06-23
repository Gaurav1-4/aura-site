"use client";

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { Cpu, Battery, Activity, Shield, Users, Info, HelpCircle } from "lucide-react"

export default function Nav() {
  return (
    <div className="fixed top-12 inset-x-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <LiquidGlassCard borderRadius="100px" className="pointer-events-auto shadow-md">
        <div className="flex items-center px-6 py-3 gap-8 md:gap-12">
          <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
            <div className="absolute inset-0 rounded-full border border-[#F0A858]/30 group-hover:scale-110 transition-transform duration-500" />
            <div className="w-3 h-3 rounded-full bg-transparent border-2 border-white/80" />
            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#F0A858] shadow-[0_0_8px_rgba(240,168,88,0.8)]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold leading-none tracking-widest text-lg">AURA</span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-medium">RING . 2ND GEN</span>
          </div>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Technology</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
                  <NavDropdownLink icon={<Cpu />} title="Sensors" desc="Nano-precision tracking." href="#benefits" />
                  <NavDropdownLink icon={<Battery />} title="Battery" desc="7 days on one charge." href="#benefits" />
                  <NavDropdownLink icon={<Activity />} title="Materials" desc="Titanium & resin." href="#benefits" />
                  <NavDropdownLink icon={<Shield />} title="Durability" desc="Waterproof to 100m." href="#benefits" />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
                  <NavDropdownLink icon={<Info />} title="Our Story" desc="Why we built AURA." href="#about" />
                  <NavDropdownLink icon={<Users />} title="Founders" desc="Meet the team." href="#about" />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Subscription</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
                  <NavDropdownLink icon={<Activity />} title="Tiers" desc="Basic, Pro, Lifetime." href="#buy" />
                  <NavDropdownLink icon={<HelpCircle />} title="FAQ" desc="Common questions." href="#buy" />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <a href="#buy">
          <GlassButton size="sm">Buy AURA</GlassButton>
        </a>
        </div>
      </LiquidGlassCard>
    </div>
  )
}

function NavDropdownLink({ icon, title, desc, href }: { icon: React.ReactNode, title: string, desc: string, href: string }) {
  return (
    <NavigationMenuLink asChild>
      <Link href={href} className="flex gap-3 p-3 rounded-lg hover:bg-white/40 transition-colors group">
        <div className="text-pewter-400 group-hover:text-ink-900 transition-colors">
          {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5" })}
        </div>
        <div>
          <div className="text-sm font-medium">{title}</div>
          <div className="text-xs opacity-60 mt-0.5">{desc}</div>
        </div>
      </Link>
    </NavigationMenuLink>
  )
}
