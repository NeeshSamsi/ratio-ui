import type { PropsWithChildren } from "react"
import Box from "@/components/Box"
import Text from "@/components/Text"
import { VariantIconMap, type Variants } from "@/components/types"
import { Tokens } from "@/tokens"
import { cva } from "cva"

const { Text: TextColor } = Tokens

const helpText = cva({
  base: "text-size-10",
  variants: {
    variant: {
      info: TextColor.informational,
      success: TextColor.success,
      critical: TextColor.critical,
    },
  },
})

type HelpTextProps = PropsWithChildren & {
  variant: Exclude<Variants, "warning">
}

export default function HelpText({ variant, children }: HelpTextProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap="2"
      className={helpText({ variant })}
    >
      <Box width="4">{VariantIconMap[variant]}</Box>
      <Text as="p">{children}</Text>
    </Box>
  )
}
