import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-start
    gap-2
  `}

  h1 {
    ${tw`
      text-primary
      text-7xl
      max-w-screen-lg:text-[2.5rem]
      max-w-screen-sm:text-[1.8rem]
      font-bold
    `}
  }

  h2 {
    ${tw`
      text-secondary
      text-[3.5rem]
      max-w-screen-lg:text-[1.8rem]
      max-w-screen-sm:text-[1.2rem]
      font-normal
    `}
  }
`
