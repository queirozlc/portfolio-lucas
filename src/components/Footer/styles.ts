import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.footer`
  ${tw`
    w-full
    flex
    mt-40
    border-t
    border-solid
    border-backgroundLight
    h-20
    items-center
    justify-center
  `}

  > div {
    ${tw`
      flex
      items-center
      justify-between
    `}

    button {
      ${tw`
        bg-none
        border-none
        text-secondary
        uppercase
        font-normal
        text-[1.2rem]
        max-w-screen-xs:text-[.9rem]
      `}
    }

    > section {
      ${tw`
        flex
        items-center
        gap-4
        max-w-screen-xs:gap-2
      `}

      svg {
        ${tw`
          w-8
          h-8
          text-text
          cursor-pointer
          transition
          duration-500
          hover:text-primary
          max-w-screen-xs:w-6
          max-w-screen-xs:h-6
        `}
      }
    }
  }
`
