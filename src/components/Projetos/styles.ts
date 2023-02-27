import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    gap-20
  `}

  > section {
    ${tw`
    w-full
    flex
    flex-col
    items-center
    gap-16
    max-w-screen-md:gap-8
  `}
  }

  > button {
    ${tw`
      bg-primary
      py-[.8rem]
      px-12
      rounded-lg
      border-none
      transition
      duration-500
      ease-in-out
      animate-pulse
      max-w-screen-sm:p-4
    `}

    > a {
      ${tw`
        uppercase
        text-white
        text-2xl
        font-semibold
        max-w-screen-sm:text-base
      `}
    }
  }
`

interface ProjetoProps {
  image: string
}

export const ProjetoContainer = styled.div<ProjetoProps>`
  ${tw`
    w-full
    flex
    h-[25rem]
    max-w-screen-md:h-[17rem]
    items-end
    relative
  `}

  > section {
    ${tw`
      w-[50rem]
      h-full
      relative
      max-w-screen-2xl:w-[40rem]
      max-w-screen-lg:w-full
    `}
    background:url(${({ image }) => image}) no-repeat center;
    background-size: cover;

    > div.overlay {
      ${tw`
        absolute
        h-full
        w-[50rem]
        max-w-screen-2xl:w-[40rem]
        max-w-screen-lg:w-full
        opacity-75
      `}
      background: ${({ theme }) => theme.gradient};
      transition: all 0.5s ease;
    }

    > div.text {
      ${tw`
        absolute
        top-12
        -right-40
        w-fit
        max-w-screen-lg:left-4
      `}
      transition: all 0.5s ease;

      h1 {
        ${tw`
          text-primary
          text-[2.5rem]
          max-w-screen-xs:text-2xl
          font-bold
          [text-shadow: -4px 5px 22px #11172b]
          capitalize
        `}
      }

      h2 {
        ${tw`
          text-secondary
          text-[2rem]
          max-w-screen-xs:text-base
          font-normal
          [text-shadow: -4px 5px 22px #11172b]
          capitalize
        `}
      }
    }
  }

  > button {
    ${tw`
      h-16
      mb-12
      ml-20
      bg-none
      border-none
      outline-none
      max-w-screen-lg:absolute
      max-w-screen-lg:bottom-4
      max-w-screen-lg:right-4
      max-w-screen-lg:m-0
      max-w-screen-xs:h-auto
    `}

    a {
      ${tw`
        text-white
        text-[2rem]
        font-normal
        flex
        items-center
        gap-[.8rem]
        transition
        duration-500
        max-w-screen-xs:text-2xl
        max-w-screen-xs:gap-[.8rem]
      `}
    }
  }

  &:hover {
    > section {
      > div.text {
        right: -12rem;
      }

      > div.overlay {
        opacity: 0.4;
      }
    }

    > button a {
      color: ${({ theme }) => theme.primary};
    }
  }

  &:nth-child(even) {
    ${tw`
      flex-row-reverse
      max-w-screen-lg:flex-row
    `}

    > button {
      ${tw`
        ml-0
        mb-0
        mt-12
        mr-20
        max-w-screen-lg:mr-0
      `}
    }

    > section > div.text {
      ${tw`
        text-right
        right-0
        -left-40
        max-w-screen-lg:left-4
        max-w-screen-lg:top-4
        max-w-screen-lg:text-left
      `}
    }

    &:hover {
      > section > div.text {
        left: -12rem;
        ${tw`
          max-w-screen-lg:left-4
        `}
      }
    }
  }
`
