import { ExperienceType } from '@/@types/ExperienceType'
import { getPrismicClient } from '@/services/prismic'
import Prismic from '@prismicio/client'
import { GetStaticProps } from 'next'
import SectionTitle from '../SectionTitle'
import ExperienciaCard from './ExperienciaCard'
import { Container } from './styles'

interface ExperienciasProps {
  experiences: ExperienceType[]
}

export default function Experiencias({ experiences }: ExperienciasProps) {
  return (
    <Container>
      <SectionTitle title="Experiências" description="E estudos" />

      <section>
        {experiences.map((experience: ExperienceType) => (
          <ExperienciaCard
            key={experience.slug}
            yearInterval={experience.yearInterval}
            title={experience.title}
            description={experience.description}
            link={experience.link}
            slug={experience.slug}
          />
        ))}
      </section>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()
  const experiencesResponse = await prismic.query([
    Prismic.Predicates.at('document.type', 'experience_and_studies')
  ])

  const experiences = experiencesResponse.results.map((experience) => ({
    slug: experience.uid,
    yearInterval: experience.data.year_interval,
    title: experience.data.title,
    description: experience.data.description,
    link: experience.data.link ? experience.data.link.url : null
  }))

  return {
    props: {
      experiences
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
