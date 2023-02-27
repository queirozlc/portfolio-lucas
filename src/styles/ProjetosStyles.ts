import { darken } from 'polished'
import styled from 'styled-components'
import tw from 'twin.macro'

export const ProjetosContainer = styled.section`
  ${tw`
    flex
    flex-col
    w-full
    h-full
  `}

  > main {
    ${tw`
      mt-20
      mb-20
      w-full
      grid
      grid-cols-[repeat(4, 1fr)]
      gap-6
      max-w-screen-lg:grid-cols-[1fr 1fr]
    `}

    @media (max-width: 550px) {
      ${tw`
        grid-cols-[1fr]
      `}
    }
  }
`

export const ProjetoSlugContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
  `}

  > main {
    ${tw`
      mt-8
      mb-8
      w-full
      px-20
      max-w-screen-md:py-0
      max-w-screen-md:px-10
    `}

    p {
      ${tw`
        text-textLight
        text-2xl
        font-light
        text-justify
        max-w-screen-md:text-base
      `}
    }

    button {
      ${tw`
        bg-primary
        py-[.8rem]
        px-12
        rounded-lg
        border-none
        transition
        duration-500
        mt-8
        max-w-screen-md:py-[.7rem]
        max-w-screen-md:px-8
      `}

      &:hover {
        background-color: ${({ theme }) => darken(0.1, theme.primary)};
      }

      a {
        ${tw`
          text-white
          uppercase
          text-2xl
          font-semibold
          max-w-screen-md:text-[.9rem]
        `}
      }
    }
  }
`
