import theme from '@/styles/themes/theme'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { CodeItem, Container, InfosContainer, TextContainer } from './styles'

export default function HomeHero() {
  const [texts] = useTypewriter({
    words: [
      'Hello World !',
      '<Lucas Queiroz/>',
      'Fullstack Developer',
      'Spring Framework',
      'Next JS',
      'TypeScript'
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 120
  })

  return (
    <Container>
      {/* <div> */}
      <TextContainer>
        <h1>Olá</h1>
        <h2>
          {texts}
          <Cursor cursorColor={`${theme.primary}`} />
        </h2>
      </TextContainer>
      <InfosContainer>
        <CodeItem>
          <span className="comment">//Minha apresentação</span>
          <span className="purple">Infos</span> {'\u007B'}
          <div>
            Nome: <span className="blue">'Lucas',</span>
          </div>
          <div>
            Sobrenome: <span className="blue">'Queiroz'</span>
          </div>
          {'\u007D'}
        </CodeItem>

        <CodeItem>
          <span className="purple">Cargo</span> {'\u007B'}
          <div>
            Função: <span className="blue">'Dev Fullstack.',</span>
          </div>
          <div>
            Stacks: <span className="blue">['Java', {'\n'}'React JS']</span>
          </div>
          {'\u007D'}
        </CodeItem>
      </InfosContainer>
      {/* </div> */}
    </Container>
  )
}
