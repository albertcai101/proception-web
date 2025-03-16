"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Typewriter } from "@/components/ui/typewriter"
import Link from "next/link"

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  gradient?: boolean
  blur?: boolean
  subtitle?: React.ReactNode
  actions?: {
    label: string
    href: string
    variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  }[]
  titleClassName?: string
  subtitleClassName?: string
  actionsClassName?: string
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      gradient = true,
      blur = true,
      subtitle,
      actions,
      titleClassName,
      subtitleClassName,
      actionsClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative z-0 flex min-h-screen w-full flex-col items-start justify-center overflow-hidden rounded-md bg-background",
          className,
        )}
        {...props}
      >
        {gradient && (
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        )}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-50 container flex justify-start flex-1 flex-col px-5 md:px-16 gap-4 mt-[30vh]"
        >
          <div className="flex flex-col items-start text-left w-full">
            <div className="h-[160px] md:h-[200px] flex flex-col md:flex-row items-start md:items-center justify-start w-full text-3xl md:text-5xl lg:text-6xl font-normal">
              <p className="flex flex-col md:flex-row items-start md:items-center w-full min-w-max">
                <span className="whitespace-nowrap mb-4 md:mb-0 md:mr-4">{"Human hands can"}</span>
                <Typewriter
                  text={[
                    "pick up clothes",
                    "sort recycling",
                    "pack boxes",
                    "fold laundry",
                    "handle tools",
                    "stack dishes",
                    "open doors",
                    "tie knots",
                    "organize shelves",
                    "assemble parts"
                  ]}
                  speed={70}
                  className="text-primary font-semibold inline-block whitespace-nowrap"
                  waitTime={1500}
                  deleteSpeed={40}
                  cursorChar={"_"}
                />
              </p>
            </div>
            {subtitle && (
              <p
                className={cn(
                  "text-xl text-muted-foreground max-w-[600px] mt-2",
                  subtitleClassName,
                )}
              >
                {subtitle}
              </p>
            )}
            {actions && actions.length > 0 && (
              <div className={cn("flex gap-4 mt-12", actionsClassName)}>
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={action.variant || "default"}
                    asChild
                  >
                    <Link href={action.href}>{action.label}</Link>
                  </Button>
                ))}
              </div>
            )}
            <div className="mt-12">
              <Badge
                icon="/yc-logo.png"
                text="Backed by Y Combinator"
              />
            </div>
          </div>
        </motion.div>
      </section>
    )
  },
)
Hero.displayName = "Hero"

export { Hero } 