import { cn } from "@/lib/utils"

export function DotPattern({ className }: { className?: string }) {
  return (
    <svg className={cn("absolute inset-0 h-full w-full pointer-events-none", className)} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dot-pattern" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="translate(0 0)">
          <circle cx="1" cy="1" r="1" fill="rgba(0,0,0,0.1)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  )
}
