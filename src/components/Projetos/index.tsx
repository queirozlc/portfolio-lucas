import { ProjectApiType } from '@/@types/ProjetoItemType'
import Link from 'next/link'
import SectionTitle from '../SectionTitle'
import ProjetoItem from './ProjetoItem'
import { Container } from './styles'

interface ProjetosProps {
  projects: ProjectApiType[]
}

export default function Projetos({ projects }: ProjetosProps) {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />
      <section>
        {projects.slice(0, 3).map((project: ProjectApiType) => (
          <ProjetoItem
            key={project.slug}
            image={project.thumbnail}
            title={project.title}
            slug={project.slug}
            type={project.type}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projetos">Ver todos os projetos</Link>
      </button>
    </Container>
  )
}
