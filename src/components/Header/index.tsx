import NavLink from './NavLink'
import { Container } from './styles'

export default function Header() {
  return (
    <Container>
      <ul>
        <NavLink path="/" title="Home" />
        <NavLink path="/projetos" title="projetos" includes />
      </ul>
    </Container>
  )
}
