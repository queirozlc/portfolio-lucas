import Header from '@/components/Header'
import ProjetoPageItem from '@/components/ProjetoPageItem'
import { ProjetosContainer } from '@/styles/ProjetosStyles'

export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />

      <main className="container">
        <ProjetoPageItem
          image="https://images.prismic.io/portfolioaula/be8779ed-c40f-42f2-bd73-e2065676a687_nuprint1.png?auto=compress, format"
          title="nubank clone"
          slug="nubank-clone"
          type="front-end"
        />
        <ProjetoPageItem
          image="https://images.prismic.io/portfolioaula/be8779ed-c40f-42f2-bd73-e2065676a687_nuprint1.png?auto=compress, format"
          title="nubank clone"
          slug="nubank-clone"
          type="front-end"
        />
        <ProjetoPageItem
          image="https://images.prismic.io/portfolioaula/be8779ed-c40f-42f2-bd73-e2065676a687_nuprint1.png?auto=compress, format"
          title="nubank clone"
          slug="nubank-clone"
          type="front-end"
        />
        <ProjetoPageItem
          image="https://images.prismic.io/portfolioaula/be8779ed-c40f-42f2-bd73-e2065676a687_nuprint1.png?auto=compress, format"
          title="nubank clone"
          slug="nubank-clone"
          type="front-end"
        />
      </main>
    </ProjetosContainer>
  )
}
