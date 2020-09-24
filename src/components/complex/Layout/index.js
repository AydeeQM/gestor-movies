import React from 'react'
import { Header } from 'components/complex/Header'
import { Sidebar } from 'components/complex/Sidebar'

import { LayoutStyled, Content, Footer } from './Layout.style'

export function Layout ({ children }) {
  return (
    <>
      <Header />
      <LayoutStyled>
        <Sidebar />
        <Content>{children}</Content>
      </LayoutStyled>
      <Footer />
    </>
  )
}
