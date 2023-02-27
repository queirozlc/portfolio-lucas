import { ProjetoItemType } from '@/@types/ProjetoItemType'
import Link from 'next/link'
import { AiOutlineRightCircle } from 'react-icons/ai'
import { ProjetoContainer } from './styles'

export default function ProjetoItem({
  title,
  type,
  slug,
  image
}: ProjetoItemType) {
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
