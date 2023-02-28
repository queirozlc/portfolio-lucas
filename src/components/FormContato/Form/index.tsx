import { sendContactMail } from '@/services/sendMail'
import theme from '@/styles/themes/theme'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { FormContainer, Input, TextArea } from '../styles'

export function Form() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (!name || !email || !message)
      return toast('Preencha todos os campos !', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      })

    try {
      setLoading(true)
      await sendContactMail(name, email, message)
      console.log('Mensagem enviada com sucesso!')
      setName('')
      setEmail('')
      setMessage('')

      toast('Mensagem enviada com sucesso!', {
        style: {
          background: theme.backgroundLight,
          color: theme.primary
        }
      })
    } catch (error) {
      toast('Erro ao enviar mensagem. Tente novamente :/', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormContainer data-aos="zoom-out" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        placeholder="Mensagem"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />
      <button type="submit" disabled={loading}>
        Enviar
      </button>
    </FormContainer>
  )
}
