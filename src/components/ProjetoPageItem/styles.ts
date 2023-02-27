import styled from 'styled-components'
import tw from 'twin.macro'

interface ContainerProps {
  image: string
}

export const Container = styled.div<ContainerProps>`
  > a {
    ${tw`
      relative
      w-full
      h-40
      bg-[#ccc]
      p-6
      flex
      items-end
      justify-start
      rounded-lg
      border
      border-solid
      border-border
      transition
      duration-500
      cursor-pointer
      overflow-hidden
      hover:border-primary
    `}
    background:url(${({ image }) => image}) no-repeat center center;
    background-size: cover;

    > section {
      z-index: 2;
      h1 {
        ${tw`
          text-primary
          font-bold
          capitalize
          text-2xl
        `}
      }
      h2 {
        ${tw`
          text-secondary
          font-semibold
          capitalize
          text-base
        `}
      }
    }

    > div.overlay {
      ${tw`
        absolute
        w-full
        h-full
        opacity-70
        transition
        duration-500
        left-0
        bottom-0
        hover:opacity-50
      `}
      background: ${({ theme }) => theme.gradient};
    }
  }
`
