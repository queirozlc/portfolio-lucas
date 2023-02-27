import styled from 'styled-components'
import tw from 'twin.macro'

interface ContainerProps {
  image: string
}

export const Container = styled.div<ContainerProps>`
  ${tw`
    w-full
    h-[26rem]
    relative
    flex
    py-12
    px-20
    items-end
    justify-start
    max-w-screen-md:py-8
    max-w-screen-md:px-10
    max-w-screen-md:h-80
  `}
  background: url(${(props) => props.image}) no-repeat center;
  background-size: cover;

  section {
    z-index: 2;

    h1 {
      ${tw`
        text-primary
        text-5xl
        font-bold
        max-w-screen-md:text-[1.8rem]
      `}
    }
    h2 {
      ${tw`
        text-secondary
        text-[2rem]
        font-medium
        max-w-screen-md:text-[1.2rem]
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
`
