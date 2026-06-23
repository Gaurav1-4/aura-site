import { cn } from "@/lib/utils"

export function AnimatedShinyText({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <span className={cn("inline-block text-transparent bg-clip-text bg-[linear-gradient(110deg,#3D4654,45%,#0E1014,55%,#3D4654)] bg-[length:200%_100%] animate-shiny-text", className)}>
      {children}
    </span>
  )
}
