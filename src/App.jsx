import './App.scss'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import NavigationPage from './pages/navigation-bar/NavigationPage.jsx'
import Footprint from './pages/footprint-page/Footprint.jsx'
import Projects from './pages/project-page/Projects.jsx'
import About from './pages/about-page/About.jsx'
import RecapContent from './pages/repository-page/RecapContent.jsx'

import Loading from './pages/loading-page/Loading.jsx'
import RepositoryMainAside from './pages/repository-page/RepositoryMainAside'
import Introduction from './pages/index-page/Introduction.jsx'
import Plan from './pages/plans-page/Plan.jsx'
import Handbook from './pages/Interview-handbook-page/Handbook.jsx'
import Resources from './pages/resource-share-page/Resources.jsx'
import HandbookItems from './components/Interview-handbook-comps/ContentDynamicRoute/HandbookItems.jsx'
import HandbookMainNav from './pages/Interview-handbook-page/HandbookMainNav.jsx'


const Homepage = lazy(() => import('./pages/home-page/Homepage.jsx'))

const router = createHashRouter([
  { path: '/', element: <Introduction /> },
  {
    element: <NavigationPage />,
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
        path: '/interview-handbook',
        element: <HandbookMainNav />,
        children: [
          { index: true, element: <Handbook /> },
          { path: ':handbookId', element: <HandbookItems /> }
        ]
      },
      {
        path: '/repository',
        element: <RepositoryMainAside />,
        children: [
          // { index: true, element: <RecapSubNav />, },
          { path: ':recapId', element: <RecapContent /> }
        ]
      },
      {
        path: '/footprint',
        element: <Footprint />
      },
      // {
      //   path: '/projects',
      //   element: <Projects />
      // },
      {
        path: '/resources',
        element: <Resources />
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
