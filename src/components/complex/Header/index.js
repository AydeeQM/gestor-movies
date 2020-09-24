import React from 'react'
import { HeaderStyled, Navbar, NavItem } from './Header.style'

export function Header () {
  return (
    <HeaderStyled>
      <Navbar>
        <NavItem>
          <figure>
            logo
          </figure>
          <span>Evaluación Osp</span>
        </NavItem>
        <NavItem>
          <figure>
            logo
          </figure>
          <span>Admin</span>
        </NavItem>
      </Navbar>
    </HeaderStyled>
  )
}
