import { cn } from "@/lib/utils"

export function Glow({ className }: { className?: string }) {
  return (
    <div className={cn("absolute pointer-events-none bg-[radial-gradient(circle_at_center,var(--brand),transparent_70%)] opacity-30 mix-blend-screen", className)} />
  )
}
