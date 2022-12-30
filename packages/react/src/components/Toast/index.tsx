import * as Toast from '@radix-ui/react-toast'
import { ComponentProps, useEffect, useState } from 'react'
import {
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { Button } from '../button'
import { X } from 'phosphor-react'
import { dateFormatter } from '../../utils/dateFormatter'

export type ToastComponentProps = ComponentProps<typeof ToastRoot>

export function ToastComponent() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setOpen(false)
    }, 3000)
  }, [])

  return (
    <ToastProvider>
      <Button onClick={() => setOpen((prev) => !prev)}>Add to calendar</Button>
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>Scheduling made</ToastTitle>
        <ToastDescription>{dateFormatter.format(Date.now())}</ToastDescription>
        <ToastClose>
          <X onClick={() => setOpen(false)} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  )
}
