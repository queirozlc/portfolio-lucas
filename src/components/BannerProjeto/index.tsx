import { Container } from './styles'

interface BannerProjetoProps {
  title: string
  type: string
  image: string
}

export default function BannerProjeto({
  title,
  type,
  image
}: BannerProjetoProps) {
  return (
    <Container image={image}>
      <div className="overlay" />

      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Container>
  )
}
