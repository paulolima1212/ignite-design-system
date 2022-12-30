import { StoryObj, Meta } from '@storybook/react'

import {
  Box,
  Button,
  TooltipComponent,
  TooltipComponentProps,
} from '@chronostech-ui/react'

export default {
  title: 'Form/TooltipComponent',
  component: TooltipComponent,
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
} as Meta<TooltipComponentProps>

export const Primary: StoryObj<TooltipComponentProps> = {}
