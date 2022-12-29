import { StoryObj, Meta } from '@storybook/react'

import { Box, Text, TextAreaComp, TextAreaCompProps } from '@ignite-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextAreaComp,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as={'label'}
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            padding: '$4',
          }}
        >
          <Text size={'sm'}>Observation</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaCompProps>

export const Primary: StoryObj<TextAreaCompProps> = {
  args: {
    placeholder: 'type your name',
  },
}

export const Disabled: StoryObj<TextAreaCompProps> = {
  args: {
    disabled: true,
  },
}
