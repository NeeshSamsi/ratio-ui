import type { ComponentProps } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import Callout from "@/components/Callout"

type StoryProps = ComponentProps<typeof Callout>

export default {
  component: Callout,
  title: "Text/Callout",
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["info", "success", "warning", "critical"],
    },
    title: {
      control: {
        type: "text",
      },
    },
    children: {
      control: {
        type: "text",
      },
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Callouts highlight key information or states, such as warnings, success messages, or tips. They bring emphasis without overpowering the surrounding design.

![Dos and Donts](/images/docs/Callout.png)
`,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<StoryProps>

type Story = StoryObj<StoryProps>

export const Default: Story = {
  render: (props) => <Callout {...props} />,
  args: {
    variant: "info",
    title: "Frame within a frame",
    children:
      "This compositional technique frames a subject with elements already in the scene, such as windows or trees, to create a sense of depth and provide additional context to the subject.",
  },
}
