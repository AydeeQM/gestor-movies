import React from 'react'
import { Sidenav, Link } from './Sidebar.style'

export function Sidebar () {
  return (
    <Sidenav>
      <li><Link to='/'>Dashboard</Link></li>
      <li><Link to='/'>Películas</Link></li>
      <li><Link to='/'>Turnos</Link></li>
      <li><Link to='/'>Administradores</Link></li>
      <li><Link to='/'>Perfil</Link></li>
      <li><Link to='/'>Cerrar sesión</Link></li>
    </Sidenav>
  )
}
