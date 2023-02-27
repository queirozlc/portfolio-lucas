import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { Container } from './styles'

export default function Footer() {
  function handleRedirect(url: string) {
    window.open(url, '_blank')
  }

  function handleScrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollToTop}>
          Voltar ao Topo
        </button>
        <section>
          <AiOutlineLinkedin
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/queiroz-lucas/')
            }
          />
          <AiFillGithub
            onClick={() => handleRedirect('https://www.github.com/queirozlc')}
          />
        </section>
      </div>
    </Container>
  )
}
