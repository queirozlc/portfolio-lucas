import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavLinkContainer } from './styles'

interface NavLinkProps {
  path: string
  title: string
}

export default function NavLink({ path, title }: NavLinkProps) {
  const router = useRouter()
  const isActive = router.pathname === path

  return (
    <NavLinkContainer active={isActive}>
      <Link href={path}>{title}</Link>
    </NavLinkContainer>
  )
}
