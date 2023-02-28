import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
  ${tw`
    w-full
  `}

  > section {
    ${tw`
      w-full
      mt-28
      flex
      gap-[1.5rem]
      max-w-screen-lg:gap-4
      max-w-screen-md:flex-col
      max-w-screen-md:gap-8
      max-w-screen-md:mt-20
      pb-[8rem]
      border-b-[3px]
      border-solid
      border-primary
    `}
  }
`

export const ItemContainer = styled.div`
  > div {
    ${tw`
      p-4
      pt-10
      h-fit
      flex
      flex-col
      items-start
      justify-start
      transition
      duration-500
      max-w-[19rem]
      max-w-screen-lg:pt-6
      max-w-screen-md:h-auto
      max-w-screen-md:p-8
      max-w-screen-md:max-w-full
    `}
    background: ${({ theme }) => theme.gradient};

    > h1 {
      ${tw`
      text-primary
      text-[2rem]
      mb-6
      font-bold
      max-w-screen-lg:text-[1.2rem]
      max-w-screen-lg:mb-4
      max-w-screen-md:text-3xl
    `}
    }

    > h2 {
      ${tw`
      text-secondary
      text-[1.5rem]
      mb-4
      font-bold
      max-w-screen-lg:text-base
      max-w-screen-md:text-2xl
    `}
    }

    > p {
      ${tw`
      text-textLight
      text-base
      mb-4
      font-medium
      max-w-screen-lg:text-[.9rem]
      max-w-screen-md:text-base
    `}
    }
  }

  &:hover > div {
    ${tw`
      brightness-[1.3]
      translate-y-[-20px]
      max-w-screen-md:translate-y-0
    `}
  }

  &:nth-child(even) > div {
    ${tw`
      mt-[4rem]
      max-w-screen-md:mt-0
    `}
  }
`
