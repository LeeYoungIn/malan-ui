import { ReactNode } from 'react'
import { Button } from '@ui/components/button'

export interface ModalProps {
  visible?: boolean
  title?: string
  children: ReactNode
  footer?: ReactNode
  onClose?(): void
}

export function Modal({ visible = true, title, footer, onClose, children }: ModalProps) {
  return !visible ? null : <div
    onClick={onClose}
    className="fixed inset-0 flex items-center justify-center w-full h-screen bg-stone-200/50 dark:bg-stone-800/50 backdrop-blur">
    <div className="modal min-w-60">
      <div className="modal-header flex items-center justify-between gap-6">
        <span className="text-xl">{title}</span>
        <Button variant="clean" className="modal-close" onlyIcon></Button>
      </div>
      <div className="modal-body">
        {children}
      </div>
      {footer && <div className="modal-footer grid grid-flow-col auto-cols-fr divide-x dark:divide-stone-800">
        {footer}
      </div>}
    </div>
  </div>
}