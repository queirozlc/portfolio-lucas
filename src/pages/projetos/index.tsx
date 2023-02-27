import { ProjectApiType } from '@/@types/ProjetoItemType'
import Header from '@/components/Header'
import ProjetoPageItem from '@/components/ProjetoPageItem'
import { getPrismicClient } from '@/services/prismic'
import { ProjetosContainer } from '@/styles/ProjetosStyles'
import Prismic from '@prismicio/client'
import { GetStaticProps } from 'next'

interface ProjetosProps {
  projects: ProjectApiType[]
}

export default function Projetos({ projects }: ProjetosProps) {
  return (
    <ProjetosContainer>
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
