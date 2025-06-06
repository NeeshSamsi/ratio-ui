import type { ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"
import { cva } from "cva"
import Text, { type TextElement } from "@/components/Text"
import { Tokens, type SpacingKey } from "@/tokens"

type HeadingElement = Extract<
  TextElement,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>

export type HeadingProps = Omit<
  ComponentPropsWithoutRef<HeadingElement> & {
    level: HeadingElement
    displayLevel: HeadingElement
    marginBottom?: SpacingKey
    center?: boolean
    className?: string
  },
  "style"
>

const heading = cva({
  base: `""`,
  variants: {
    level: {
      h1: `text-size-110 leading-none font-medium ${Tokens.MarginBottom[10]}`,
      h2: `text-size-100 leading-none font-medium${Tokens.MarginBottom[8]}`,
      h3: `text-size-90 leading-[1.1] font-medium${Tokens.MarginBottom[6]}`,
      h4: `text-size-80 leading-tight font-medium${Tokens.MarginBottom[4]}`,
      h5: `text-size-70 leading-tight font-medium${Tokens.MarginBottom[4]}`,
      h6: `text-size-60 leading-snug font-medium ${Tokens.MarginBottom[4]}`,
    },
  },
})

export default function Heading({
  level = "h1",
  displayLevel,
  marginBottom,
  center = false,
  children,
  className,
  ...restProps
}: HeadingProps) {
  return (
    <Text
      as={level}
      className={cn(
        heading({ level: displayLevel }),
        center && "text-center",
        marginBottom && Tokens.MarginBottom[marginBottom],
        className,
      )}
      {...restProps}
    >
      {children}
    </Text>
  )
}
