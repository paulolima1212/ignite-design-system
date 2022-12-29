import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export type BoxProps = ComponentProps<typeof Box> & {
  as?: ElementType
}

export const Box = styled('div', {
  background: '$gray800',
  borderRadius: '$sm',
  border: 'solid 1px $gray600',
})

Box.displayName = 'Box'
