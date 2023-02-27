import Link from 'next/link'
import SectionTitle from '../SectionTitle'
import ProjetoItem from './ProjetoItem'
import { Container } from './styles'

export default function Projetos() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />

      <section>
        <ProjetoItem
          image="https://images.prismic.io/portfolioaula/be8779ed-c40f-42f2-bd73-e2065676a687_nuprint1.png?auto=compress, format"
          title="nubank clone"
          slug="nubank-clone"
          type="front-end"
        />
        <ProjetoItem
          image="https://images.prismic.io/portfolioaula/be8779ed-c40f-42f2-bd73-e2065676a687_nuprint1.png?auto=compress, format"
          title="Nubank Clone"
          slug="nubank-clone"
          type="Front-end"
        />
        <ProjetoItem
          image="https://images.prismic.io/portfolioaula/be8779ed-c40f-42f2-bd73-e2065676a687_nuprint1.png?auto=compress, format"
          title="Nubank Clone"
          slug="nubank-clone"
          type="Front-end"
        />
      </section>

      <button type="button">
        <Link href="/projetos">Ver todos os projetos</Link>
      </button>
    </Container>
  )
}
