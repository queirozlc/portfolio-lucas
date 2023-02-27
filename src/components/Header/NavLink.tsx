import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavLinkContainer } from './styles'

interface NavLinkProps {
  path: string
  title: string
  includes?: boolean
}

export default function NavLink({
  path,
  title,
  includes = false
}: NavLinkProps) {
  const router = useRouter()
  function verifyActive() {
    if (includes) {
      return router.pathname.includes(path)
    }
    return router.pathname === path
  }

  const isActive = verifyActive()

  return (
    <NavLinkContainer active={isActive}>
      <Link href={path}>{title}</Link>
    </NavLinkContainer>
  )
}
