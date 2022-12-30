import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})

export const ToastRoot = styled(Toast.Root, {
  position: 'relative',
  backgroundColor: '$gray800',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: 15,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: 360,
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: 700,
  color: '$white',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  lineHeight: '$base',
})

export const ToastAction = styled(Toast.ToastAction, {})

export const ToastClose = styled(Toast.ToastClose, {
  all: 'unset',
  position: 'absolute',
  top: '$4',
  right: '$4',
  color: '$white',
})

export const ToastViewport = styled(Toast.ToastViewport, {
  position: 'fixed',
  bottom: '1rem',
  right: '$2',
})
