import { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/paulolima1212.png',
    alt: 'Paulo Lima',
    size: 'medium',
  },
  argTypes: {
    size: {
      options: ['medium', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const Large: StoryObj<AvatarProps> = {
  args: {
    size: 'large',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
