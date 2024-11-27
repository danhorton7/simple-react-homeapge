import { ReactNode } from 'react'

export interface TabButtonProps {
  children: ReactNode
  onClickFn: (event: React.MouseEvent<HTMLButtonElement>) => void
  isActive: boolean
}
