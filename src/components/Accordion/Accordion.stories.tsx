import type { Meta, StoryObj } from "@storybook/react-vite";

import { Accordion } from "./Accordion";

const meta = {
  component: Accordion,
  tags: ["autodocs"],
  args: {
    items: [
      {
        trigger: { body: "Item one trigger sample" },
        content: { body: "Item one content sample" },
      },
      {
        trigger: { body: "Item two trigger sample" },
        content: { body: "Item two content sample" },
      },
      {
        trigger: { body: "Item three trigger sample" },
        content: { body: "Item three content sample" },
      },
    ],
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OneItemOnly: Story = {
  args: {
    shouldAllowMultipleExpanded: false,
  },
};
