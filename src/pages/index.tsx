import { ProjectApiType } from '@/@types/ProjetoItemType'
import Conhecimentos from '@/components/Conhecimentos'
import Experiencias from '@/components/Experiencias'
import Footer from '@/components/Footer'
import FormContato from '@/components/FormContato'
import Header from '@/components/Header'
import HomeHero from '@/components/HomeHero'
import Projetos from '@/components/Projetos'
import { getPrismicClient } from '@/services/prismic'
import { HomeContainer } from '@/styles/HomeStyles'
import Prismic from '@prismicio/client'
import { GetStaticProps } from 'next'

interface HomeProps {
  projects: ProjectApiType[]
}

export default function Home({ projects }: HomeProps) {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiencias />
        <Projetos projects={projects} />
        <Conhecimentos />
        <FormContato />
      </main>

      <Footer />
    </HomeContainer>
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
