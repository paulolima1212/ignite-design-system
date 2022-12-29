import { styled } from '../../styles'
import { Text } from '../text'

export const MultiStepContainer = styled('div', {
  width: '100%',
  background: '$gary800',
})

export const Label = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: '$xs',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
  background: '$gray800',
})

export const Step = styled('div', {
  position: 'relative',
  height: '$1',
  borderRadius: '$px',
  background: '$gray600',

  variants: {
    active: {
      true: {
        background: '$gray100',
      },
    },
  },
})

MultiStepContainer.displayName = 'MultiStep'
