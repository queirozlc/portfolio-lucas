import { darken } from 'polished'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
  ${tw`
    overflow-hidden
  `}
`

export const FormContainer = styled.form`
  ${tw`
    mt-32
    w-full
    grid
    [grid-template-columns: 1fr 1fr]
    gap-4
    max-w-screen-md:mt-20
    max-w-screen-md:grid-cols-[1fr]
  `}

  > button {
    ${tw`
      border-none
      py-4
      px-10
      text-white
      font-medium
      text-[1.2rem]
      rounded-[.5rem]
      bg-primary
      transition
      duration-500
      w-fit
      max-w-screen-xs:py-[.8rem]
      max-w-screen-xs:px-6
      max-w-screen-xs:text-base
    `}

    &:disabled {
      ${tw`
        opacity-50
      `}
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => darken(0.1, theme.primary)};
    }
  }
`

export const Input = styled.input`
  ${tw`
    h-12
    w-full
    bg-inputBackground
    border
    border-solid
    border-border
    px-[1.7rem]
    py-6
    outline-none
    text-primary
    rounded-[.5rem]
    text-[1.2rem]
    transition
    duration-500
    max-w-screen-xs:p-[1.4rem]
    max-w-screen-xs:text-base
  `}

  &:focus {
    ${tw`
      border-primary
    `}
  }

  &::placeholder {
    ${tw`
      text-primary
    `}
  }
`
export const TextArea = styled.textarea`
  ${tw`
    h-40
    w-full
    bg-inputBackground
    border
    border-solid
    border-border
    px-[1.7rem]
    py-6
    outline-none
    text-primary
    rounded-[.5rem]
    text-[1.2rem]
    transition
    duration-500
    resize-none
    col-[1/3]
    max-w-screen-md:col-[1]
    max-w-screen-xs:p-[1.4rem]
    max-w-screen-xs:text-base
  `}

  &:focus {
    ${tw`
      border-primary
    `}
  }

  &::placeholder {
    ${tw`
      text-primary
    `}
  }
`
