import BannerProjeto from '@/components/BannerProjeto'
import Header from '@/components/Header'
import { ProjetoSlugContainer } from '@/styles/ProjetosStyles'

export default function ProjetoSlug() {
  return (
    <ProjetoSlugContainer>
      <Header />
      <BannerProjeto
        title="Projeto 1"
        type="Tipo 1"
        image="https://images.prismic.io/portfolioaula/be8779ed-c40f-42f2-bd73-e2065676a687_nuprint1.png?auto=compress, format"
      />

      <main>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
          voluptates sunt. Eos harum assumenda fugiat pariatur facere.
          Accusantium, enim, qui, consequatur culpa quas alias velit consectetur
          deserunt dignissimos ducimus accusamus! Perspiciatis, dolorem quas
          explicabo dolore fuga maxime dolor optio, sed rerum autem, facilis
          aperiam? Dolorum, porro. Tempore nulla odit, molestiae illum deleniti
          veritatis error a rerum nobis. Dolorem adipisci fuga aspernatur iure
          quisquam fugiat aperiam. Laborum corporis hic explicabo ad rerum esse
          totam voluptas tempore. Recusandae fugiat porro molestiae distinctio.
        </p>

        <button type="button">
          <a href="">Ver projeto</a>
        </button>
      </main>
    </ProjetoSlugContainer>
  )
}
