import { ReactNode } from 'react'
import { ConhecimentoItemContainer } from '../styles'

interface ConhecimentoItemProps {
  title: string
  icon: ReactNode
}

export function ConhecimentoItem({ title, icon }: ConhecimentoItemProps) {
  return (
    <ConhecimentoItemContainer data-aos="zoom-in-up">
      <p>{title}</p>
      {icon}
    </ConhecimentoItemContainer>
  )
}
