import styled from 'styled-components'
import { Link as Menu } from '@reach/router'

export const Sidenav = styled.ul`
  background-color: var(--grey);
  height: calc(100vh - 112px);
  overflow-x: hidden;
  width: 160px;
  z-index: 1;
`
export const Link = styled(Menu)`
  color: var(--dark);
  display: block;
  padding: 0.75rem;
  text-decoration: none;
  &:hover{
    background-color: var(--white-alt)
  }
`
