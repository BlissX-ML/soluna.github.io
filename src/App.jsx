import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import Nav from './pages/Navigation/Nav.jsx'
import RecapSubNav from './components/Recap/Navigation/RecapSubNav.jsx'
import Footprint from './pages/Footprint/Footprint.jsx'
import Projects from './pages/Project/Projects.jsx'
import About from './pages/About/About.jsx'
import RecapContent from './pages/Recap/RecapContent.jsx'

import Loading from './pages/LoadingState/Loading.jsx'
import RecapAside from './pages/Recap/RecapAside.jsx'
import Introduction from './pages/Index/Introduction.jsx'
import Plan from './pages/TodoPlans/Plan.jsx'


const Homepage = lazy(() => import('./pages/Homepage/Homepage.jsx'))

const router = createHashRouter([
  { path: '/', element: <Introduction /> },
  {
    element: <Nav />,
    children: [
      {
        path: '/home',
        element: <Homepage />
      },
      {
        path: '/plans',
        element: <Plan />,
      },
      {
        path: '/recap',
        element: <RecapAside />,
        children: [
          { index: true, element: <RecapSubNav />, },
          { path: ':recapId', element: <RecapContent /> }
        ]
      },
      {
        path: '/footprint',
        element: <Footprint />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/about',
        element: <About />
      },
    ]
  },

])

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
