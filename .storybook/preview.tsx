import type { Preview } from "@storybook/react-vite"
import type { StoryFn as Story, StoryContext } from "@storybook/react-vite"
import { themes } from "storybook/theming"
import "../src/index.css"

import React from "react"
import ThemeProvider from "../src/components/ThemeProvider"
import Box from "../src/components/Box"

const preview: Preview = {
  initialGlobals: {
    backgrounds: { value: "#0A0A0A" },
  },
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Welcome",
          "VSCO",
          "Foundations",
          "Voice and Tone",
          "Text",
          "Tokens",
          [
            "Text/Heading",
            "Text/Paragraph",
            "Text/UnorderedList",
            "Text/UnorderedList",
            "Text/Callout",
          ],
          "Navigational",
          [
            "Navigational/Anchor",
            "Navigational/Breadcrumb",
            "Navigational/Pagination",
            "Navigational/Tabs",
            "Navigational/DropdownMenu",
          ],
          "Layout",
          ["Layout/Stack", "Layout/Skeleton"],
          "Display",
          ["Display/Alert", "Display/Card", "Display/Badge", "Display/Avatar"],
          "Form",
          [
            "Form/Button",
            "Form/Input",
            "Form/Checkbox",
            "Form/Radio",
            "Form/Select",
            "Form/HelpText",
          ],
          "Overlay",
          ["Overlay/Toast", "Overlay/Modal"],
          "Primitives",
          "*",
        ],
      },
    },
    background: {
      default: "#0A0A0A",
    },
    decorators: [
      (Story) => ({
        components: { Story, ThemeProvider },
        template: (
          <ThemeProvider>
            <Box padding="6">
              <Story />
            </Box>
          </ThemeProvider>
        ),
      }),
    ],

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    (Story: Story, context: StoryContext) => (
      <ThemeProvider>
        <Box padding="6">{Story(context.args, context)}</Box>
      </ThemeProvider>
    ),
  ],
}

export default preview
