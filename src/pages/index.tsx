import { ExperienceType } from '@/@types/ExperienceType'
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
import Aos from 'aos'
import 'aos/dist/aos.css'
import { GetStaticProps } from 'next'
import { useEffect } from 'react'

interface HomeProps {
  projects: ProjectApiType[]
  experiences: ExperienceType[]
}

export default function Home({ projects, experiences }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiencias experiences={experiences} />
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
  const experiencesResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'experience_and_studies')],
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

  const experiences = experiencesResponse.results.map((experience) => ({
    slug: experience.uid,
    title: experience.data.title,
    yearInterval: experience.data.year_interval,
    description: experience.data.description,
    link: experience.data.link ? experience.data.link.url : null
  }))

  return {
    props: {
      projects,
      experiences
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
