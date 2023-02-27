import SectionTitle from '../SectionTitle'
import { Form } from './Form'
import { Container } from './styles'

export default function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Vamos <br /> Trabalhar Juntos?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo e <br /> entrarei em contato em breve
          </>
        }
      />

      <Form />
    </Container>
  )
}
