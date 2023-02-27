import Link from 'next/link'
import { AiOutlineRightCircle } from 'react-icons/ai'
import { ProjetoContainer } from './styles'

interface ProjetoItemProps {
  title: string
  type: string
  slug: string
  image: string
}

export default function ProjetoItem({
  title,
  type,
  slug,
  image
}: ProjetoItemProps) {
  return (
    <ProjetoContainer image={image}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button>
        <Link href={`/projetos/${slug}`}>
          Ver Mais <AiOutlineRightCircle />
        </Link>
      </button>
    </ProjetoContainer>
  )
}
