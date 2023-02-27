import SectionTitle from '../SectionTitle'
import ExperienciaCard from './ExperienciaCard'
import { Container } from './styles'

export default function Experiencias() {
  return (
    <Container>
      <SectionTitle title="Experiências" description="E estudos" />

      <section>
        <ExperienciaCard />
        <ExperienciaCard />
        <ExperienciaCard />
        <ExperienciaCard />
      </section>
    </Container>
  )
}
