import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
  ${tw`
    w-full
  `}

  > section {
    ${tw`
      mt-32
      w-full
      flex
      items-center
      justify-center
      gap-32
      max-w-screen-lg:gap-20
      max-w-screen-md:gap-12
      max-w-screen-md:flex-wrap
      max-w-screen-md:mt-20
    `}
  }
`

export const ConhecimentoItemContainer = styled.div`
  ${tw`
    flex
    flex-col
    gap-[.8rem]
    items-center
    justify-center
  `}

  p {
    ${tw`
      text-primary
      font-normal
      uppercase
      text-[1.3rem]
      max-w-screen-lg:text-base
      mb-2
    `}
  }

  svg {
    ${tw`
      w-[6.5rem]
      h-[6.5rem]
      max-w-screen-lg:w-[5rem]
      max-w-screen-lg:h-[5rem]
      text-secondary
      transition
      duration-300
      hover:text-primary
      hover:scale-95
    `}
  }
`
