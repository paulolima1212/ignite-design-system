import { StoryObj, Meta } from '@storybook/react'

import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Title example',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const FirstTitle: StoryObj<HeadingProps> = {
  args: {
    children: 'Strong Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Heading is a `h2` for default, it can be change for another tag, using property `as`',
      },
    },
  },
}
