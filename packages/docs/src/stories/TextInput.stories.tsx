import { StoryObj, Meta } from '@storybook/react'

import { Box, Text, TextInput, TextInputComponentProps } from '@ignite-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
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
          <Text size={'sm'}>User Name</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputComponentProps>

export const Primary: StoryObj<TextInputComponentProps> = {
  args: {
    placeholder: 'type your name',
  },
}

export const WithPrefix: StoryObj<TextInputComponentProps> = {
  args: {
    prefix: 'cal.com/',
  },
}

export const Disabled: StoryObj<TextInputComponentProps> = {
  args: {
    disabled: true,
  },
}
