import { User } from 'phosphor-react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { ComponentProps } from 'react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size: 'medium' | 'large'
}

export function Avatar({ src, ...props }: AvatarProps) {
  return (
    <AvatarContainer {...props}>
      <AvatarImage src={src} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
