import { StoryObj, Meta } from '@storybook/react'

import {
  Box,
  Button,
  ToastComponent,
  ToastComponentProps,
} from '@chronostech-ui/react'

export default {
  title: 'Form/ToastComponent',
  component: ToastComponent,
  args: {
    children: <Button>Send</Button>,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as={'label'}
          css={{
            display: 'flex',
            padding: '$16',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '$2',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastComponentProps>

export const Primary: StoryObj<ToastComponentProps> = {}
