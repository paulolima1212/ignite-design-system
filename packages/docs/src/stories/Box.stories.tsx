import { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps, Heading, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Heading as={'h1'}>Hello world</Heading>
        <Text>Testing element</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

export const CustomTag: StoryObj<BoxProps> = {
  args: {
    children: 'Strong Text',
    as: 'section',
  },
}
