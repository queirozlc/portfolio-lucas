import { ProjectApiType } from '@/@types/ProjetoItemType'
import BannerProjeto from '@/components/BannerProjeto'
import Header from '@/components/Header'
import LoadingScreen from '@/components/LoadingScreen'
import { getPrismicClient } from '@/services/prismic'
import { ProjetoSlugContainer } from '@/styles/ProjetosStyles'
import Prismic from '@prismicio/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

export default function ProjetoSlug({ project }: { project: ProjectApiType }) {
  const router = useRouter()

  if (router.isFallback) {
    return <LoadingScreen />
  }

  return (
    <ProjetoSlugContainer>
      <Header />
      <BannerProjeto
        title={project.title}
        type={project.type}
        image={project.thumbnail}
      />

      <main>
        <p>{project.description}</p>

        <button type="button">
          <a href={project.link} target="_blank">
            Ver projeto
          </a>
        </button>
      </main>
    </ProjetoSlugContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient()
  const projectsResponse = await prismic.query([
    Prismic.predicates.at('document.type', 'projeto')
  ])

  const paths = projectsResponse.results.map((projeto) => ({
    params: { slug: projeto.uid }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient()
  const { slug } = context.params as ParsedUrlQuery

  const projectsResponse = await prismic.getByUID('projeto', String(slug), {})
  const project = {
    slug: projectsResponse.uid,
    title: projectsResponse.data.title,
    type: projectsResponse.data.type,
    description: projectsResponse.data.description,
    link: projectsResponse.data.link.url,
    thumbnail: projectsResponse.data.thumbnail.url
  }
  return {
    props: {
      project
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
