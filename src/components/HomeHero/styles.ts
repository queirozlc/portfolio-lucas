import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
  ${tw`
    flex
    w-full
    flex-col
    gap-8
    items-center
    justify-center
    mt-32
    max-w-screen-md:flex-col
    max-w-screen-md:gap-2
  `}

  > div {
    ${tw`
      max-w-screen-md:w-full
    `}
  }
`

export const TextContainer = styled.section`
  ${tw`
    mb-8
    w-full
    text-center
    max-w-screen-lg:mb-2
    max-w-screen-sm:text-left
    max-w-screen-sm:mb-4
  `}

  > h1 {
    ${tw`
      text-9xl
      max-w-screen-2xl:text-[5rem]
      max-w-screen-lg:text-5xl
      max-w-screen-xs:text-4xl
      font-bold
      text-primary
      mb-10
      max-w-screen-lg:mb-1
    `}
  }

  > h2 {
    ${tw`
      text-5xl
      max-w-screen-2xl:text-[2rem]
      max-w-screen-lg:text-2xl
      max-w-screen-xs:text-xl
      text-secondary
      font-medium
      font-secondary
    `}
  }
`
export const InfosContainer = styled.section`
  ${tw`
    w-full
    max-w-4xl
    max-w-screen-2xl:max-w-2xl
    max-w-screen-lg:max-w-lg
    flex
    flex-col
    gap-8
  `}
`

export const CodeItem = styled.pre`
  ${tw`
    p-8
    text-white
    w-[24rem]
    max-w-screen-2xl:w-[18rem]
    max-w-screen-2xl:p-[1.5rem]
    max-w-screen-2xl:text-[0.8rem]
    max-w-screen-lg:w-full
    self-start
    transition
    duration-1000
    ease-in-out
    hover:brightness-[1.2]
  `}
  background: ${({ theme }) => theme.gradient};

  &:last-child {
    ${tw`
      self-end
      w-[25rem]
      max-w-screen-2xl:w-[21rem]
      max-w-screen-2xl:p-[1.5rem]
      max-w-screen-2xl:text-[0.8rem]
      max-w-screen-lg:w-full
    `}
  }

  > div {
    ${tw`
      my-[0.2rem]
      ml-4
      font-secondary
    `}
  }

  span {
    ${tw`
      font-secondary
      font-medium
    `}
  }

  span.purple {
    color: #c38cdd;
  }

  span.blue {
    color: #7ac7e3;
  }

  span.comment {
    ${tw`
      text-text
      block
      mb-4
    `}
  }
`
