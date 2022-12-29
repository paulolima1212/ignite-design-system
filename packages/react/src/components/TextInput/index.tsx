import { ComponentProps } from 'react'
import { TextInputContainer, TextInputComponent, Prefix } from './styles'

export interface TextInputComponentProps
  extends ComponentProps<typeof TextInputComponent> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputComponentProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <TextInputComponent {...props} />
    </TextInputContainer>
  )
}
