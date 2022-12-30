import * as Tooltip from '@radix-ui/react-tooltip'
import {
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './styles'
import { ComponentProps } from '@stitches/react'
import { ReactNode } from 'react'

export type TooltipComponentProps = ComponentProps<typeof TooltipRoot> & {
  children: string | ReactNode
}

export function TooltipComponent({
  children,
  ...props
}: TooltipComponentProps) {
  return (
    <TooltipProvider>
      <TooltipRoot {...props}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <Tooltip.Portal>
          <TooltipContent>
            <TooltipArrow />
            Tooltip content
          </TooltipContent>
        </Tooltip.Portal>
      </TooltipRoot>
    </TooltipProvider>
  )
}
