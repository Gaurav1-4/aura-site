"use client";

import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg"
}

// Minimal placeholder for the displacement webp
const DISPLACEMENT_MAP = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="

export function GlassButton({ className, size = "md", children, ...props }: GlassButtonProps) {
  const id = React.useId()
  
  return (
    <button
      className={cn(
        "relative overflow-hidden rounded-full border border-white/40 bg-white/20 backdrop-blur-md text-ink-900 transition-transform hover:scale-[1.02] active:scale-95 group shadow-sm",
        {
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50 mix-blend-overlay">
        <filter id={`displacement-${id}`}>
          <feImage href={DISPLACEMENT_MAP} result="displacementMap" />
          <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#displacement-${id})`} fill="rgba(255,255,255,0.1)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative z-10 flex items-center justify-center font-medium">
        {children}
      </div>
    </button>
  )
}
