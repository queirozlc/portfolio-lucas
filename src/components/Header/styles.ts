import { lighten } from 'polished'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.header`
  ${tw`
    w-full
    flex
    items-center
    justify-center
    h-[4rem]
    border-b
    border-backgroundLight
  `}

  ul {
    ${tw`
      flex
      gap-8
      items-center
    `}
  }
`

interface NavLinkContainerProps {
  active: boolean
}

export const NavLinkContainer = styled.li<NavLinkContainerProps>`
  ${tw`

  `}

  > a {
    ${tw`
      uppercase
      text-textHighlight
      font-semibold
    `}

    color: ${(props) =>
      props.active ? props.theme.primary : props.theme.textHighlight};

    &:hover {
      color: ${({ theme, active }) =>
        active
          ? lighten(0.2, theme.primary)
          : lighten(0.2, theme.textHighlight)};
    }
  }
`
