import './App.scss';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Footprint from './pages/footprint-page/Footprint.jsx';
import About from './pages/about-page/AboutPage.jsx';
import RecapContent from './pages/repository-page/RecapContent.jsx';

import Loading from './components/feedback/Loading.jsx';

import Indexpage from './layouts/index/IndexLayout.jsx';
import Resources from './pages/resource-share-page/Resources.jsx';

import MemoSidebarNavigate from './pages/memo-page/MemoSidebarNavigate';

import RenderInitialContent from './features/render-articles/RenderInitialContent';
import { MEMOS, MEMOS_ROUTE } from './_data/memo/memo';
import RenderMainContent from './features/render-articles/RenderMainContent';

import AppLayout from './layouts/app-layout/AppLayout';
import RepositorySidebarNavigate from './pages/repository-page/RepositorySidebarNavigate';
import Dashboard from './pages/dashboard-page/Dashboard';
import DashboardChartLayout from './layouts/dashboard/dashboard-certificate/DashboardCertificatesLayout';
import DashboardCertificatesLayout from './layouts/dashboard/dashboard-certificate/DashboardCertificatesLayout';
import DashboardNestedLayout from './layouts/dashboard/dashboard-nested-layout/DashboardNestedLayout';

const Homepage = lazy(() => import('./pages/home-page/Homepage.jsx'));

const router = createHashRouter([
    { path: '/', element: <Indexpage /> },
    {
        element: <AppLayout />,
        children: [
            {
                path: '/home',
                element: <Homepage />
            },
            {
                path: '/dashboard',

                children: [
                    { index: true, element: <Dashboard /> },
                    {
                        element: <DashboardNestedLayout />,
                        children: [
                            {
                                path: 'certificates',
                                element: <DashboardCertificatesLayout />
                            }
                        ]
                    }
                ]
            },
            {
                path: '/memo',
                element: <MemoSidebarNavigate />,
                children: [
                    {
                        index: true,
                        element: <RenderInitialContent files={MEMOS} />
                    },
                    {
                        path: ':routeId',
                        element: <RenderMainContent data={MEMOS_ROUTE} />
                    }
                ]
            },
            {
                path: '/repository',
                element: <RepositorySidebarNavigate />,
                children: [
                    // { index: true, element: <RecapSubNav />, },
                    { path: ':routeId', element: <RecapContent /> }
                ]
            },
            {
                path: '/footprint',
                element: <Footprint />
            },
            {
                path: '/resources',
                element: <Resources />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
]);

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;
