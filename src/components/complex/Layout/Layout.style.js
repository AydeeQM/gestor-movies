import styled from 'styled-components'

export const LayoutStyled = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: auto;
  max-width: 1280px;
`

export const Content = styled.section`
  padding: 1.5rem;
`

export const Footer = styled.footer`
  background-color: var(--dark);
  height: 2rem;
  margin: auto;
  max-width: 1280px;
  width: 100%;
`
