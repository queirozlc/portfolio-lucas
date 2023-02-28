import { ProjectApiType } from '@/@types/ProjetoItemType'
import Header from '@/components/Header'
import ProjetoPageItem from '@/components/ProjetoPageItem'
import { getPrismicClient } from '@/services/prismic'
import { ProjetosContainer } from '@/styles/ProjetosStyles'
import Prismic from '@prismicio/client'
import { GetStaticProps } from 'next'
import Head from 'next/head'

interface ProjetosProps {
  projects: ProjectApiType[]
}

export default function Projetos({ projects }: ProjetosProps) {
  return (
    <ProjetosContainer>
      <Head>
        <title>Projetos | Meu portfólio</title>
        <meta
          name="description"
          content="Nesta página mostro alguns projetos desenvolvidos por mim, e alguns que ainda estão em desenvolvimento!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Nesta página mostro alguns projetos desenvolvidos por mim, e alguns que ainda estão em desenvolvimento!"
        />
      </Head>

      <Header />

      <main className="container">
        {projects.map((project: ProjectApiType) => (
          <ProjetoPageItem
            key={project.slug}
            image={project.thumbnail}
            title={project.title}
            slug={project.slug}
            type={project.type}
          />
        ))}
      </main>
    </ProjetosContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()
  const projectsResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date desc]' }
  )
  const projects = projectsResponse.results.map((projeto) => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }))

  return {
    props: {
      projects
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
