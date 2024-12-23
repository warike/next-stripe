import * as React from "react"

import { cn } from "@/lib/utils"

const Title = React.forwardRef<HTMLInputElement, React.ComponentProps<"h1">>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        title=""
        className={cn(
          "text-balance font-semibold tracking-tight text-gray-900 text-3xl",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Title.displayName = "Title"

export { Title }
