import React from "react"
import { cn } from "@/lib/utils"

interface QuoteProps {
  children: React.ReactNode
  className?: string
}

interface QuoteSourceProps {
  children: React.ReactNode
  className?: string
}

function QuoteSource({ children, className }: QuoteSourceProps) {
  return (
    <div
      className={cn(
        "inline-block text-right",
        "text-sm font-normal text-gray-600 not-italic dark:text-gray-400",
        "font-serif",
        className,
      )}
    >
      {children}
    </div>
  )
}

function Quote({ children, className }: QuoteProps) {
  return (
    <blockquote
      className={cn(
        "grid my-8 w-3/4 mx-auto italic text-gray-800",
        "dark:text-gray-200",
        "font-serif",
        className,
      )}
    >
      {children}
    </blockquote>
  )
}

Quote.Source = QuoteSource

export { Quote }
