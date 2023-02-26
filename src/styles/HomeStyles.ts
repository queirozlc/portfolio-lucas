import styled from 'styled-components'
import tw from 'twin.macro'

export const HomeContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    w-full
    h-full
  `}

  > main {
    ${tw`
      flex
      gap-[8rem]
    `}
  }
`
