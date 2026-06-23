import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassVariants = cva(
  "relative overflow-hidden border border-white/20 bg-white/20 backdrop-blur-md",
  {
    variants: {
      blurIntensity: {
        xs: "backdrop-blur-sm",
        sm: "backdrop-blur",
        md: "backdrop-blur-md",
        lg: "backdrop-blur-lg",
        xl: "backdrop-blur-xl",
      },
      shadowIntensity: {
        xs: "shadow-sm",
        sm: "shadow",
        md: "shadow-md",
        lg: "shadow-lg",
      },
    },
    defaultVariants: {
      blurIntensity: "md",
      shadowIntensity: "sm",
    },
  }
)

export interface LiquidGlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassVariants> {
  borderRadius?: string
  glowIntensity?: "xs" | "sm" | "md"
}

export function LiquidGlassCard({
  className,
  blurIntensity,
  shadowIntensity,
  glowIntensity,
  borderRadius = "24px",
  children,
  ...props
}: LiquidGlassCardProps) {
  return (
    <div
      className={cn(glassVariants({ blurIntensity, shadowIntensity, className }))}
      style={{ borderRadius }}
      {...props}
    >
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay">
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
      {glowIntensity && (
        <div className={cn("absolute inset-0 pointer-events-none", {
          "bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_50%)]": glowIntensity === "xs",
          "bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.4),transparent_60%)]": glowIntensity === "sm",
          "bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.6),transparent_70%)]": glowIntensity === "md",
        })} />
      )}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  )
}
