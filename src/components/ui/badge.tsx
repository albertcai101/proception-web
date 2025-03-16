"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: string
  text: string
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, icon, text, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 rounded-full bg-white/[.08] px-4 py-2",
          className
        )}
        {...props}
      >
        {icon && (
          <div className="flex items-center justify-center">
            <Image
              src={icon}
              alt=""
              width={20}
              height={20}
              className="object-contain rounded-sm"
            />
          </div>
        )}
        <span className="text-sm font-medium text-zinc-300">{text}</span>
      </div>
    )
  }
)
Badge.displayName = "Badge"

export { Badge } 