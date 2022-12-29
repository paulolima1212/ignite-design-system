import { ComponentProps } from 'react'
import { styled } from '../styles'

export type TextAreaCompProps = ComponentProps<typeof TextAreaComp>

export const TextAreaComp = styled('textarea', {
  background: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  fontFamily: '$default',
  color: '$white',
  fontWeight: 'regular',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})

TextAreaComp.displayName = 'TextArea'
