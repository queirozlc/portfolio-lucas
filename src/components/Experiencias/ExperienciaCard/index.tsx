import { ExperienceType } from '@/@types/ExperienceType'
import { ItemContainer } from '../styles'

export default function ExperienciaCard({
  yearInterval,
  description,
  title,
  link
}: ExperienceType) {
  return (
    <ItemContainer>
      <div>
        <h1>{yearInterval}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        {link && <a href={link}>Ver mais</a>}
      </div>
    </ItemContainer>
  )
}
