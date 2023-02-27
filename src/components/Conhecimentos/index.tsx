import {
  SiJava,
  SiNextdotjs,
  SiReact,
  SiSpring,
  SiTypescript
} from 'react-icons/si'
import SectionTitle from '../SectionTitle'
import { ConhecimentoItem } from './ConhecimentoItem'
import { Container } from './styles'

export default function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />

      <section>
        <ConhecimentoItem title="Java" icon={<SiJava />} />
        <ConhecimentoItem title="Spring Framework" icon={<SiSpring />} />
        <ConhecimentoItem title="Next JS" icon={<SiNextdotjs />} />
        <ConhecimentoItem title="React JS" icon={<SiReact />} />
        <ConhecimentoItem title="Typescript" icon={<SiTypescript />} />
      </section>
    </Container>
  )
}
