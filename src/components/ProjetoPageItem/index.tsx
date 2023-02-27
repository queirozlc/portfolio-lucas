import { ProjetoItemType } from '@/@types/ProjetoItemType'
import Link from 'next/link'
import { Container } from './styles'

export default function ProjetoPageItem({
  title,
  type,
  image,
  slug
}: ProjetoItemType) {
  return (
    <Container image={image}>
      <Link href={`/projetos/${slug}`}>
        <div className="overlay" />
        <section>
          <h1>{title}</h1>
          <h2>{type}</h2>
        </section>
      </Link>
    </Container>
  )
}
