import { ReactNode } from 'react'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  children: ReactNode
}
