import React, { Suspense } from 'react'
import { GlobalStyle } from 'styles/GlobalStyles'
import 'assets/icomoon/style.css'
import { Router } from '@reach/router'

const Dashboard = React.lazy(() => import('./pages/Dashboard'))

function App () {
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Router>
        <Dashboard path='/' />
      </Router>
    </Suspense>
  )
}

export default App
