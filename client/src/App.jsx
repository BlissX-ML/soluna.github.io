import "./App.scss";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import Footprint from "./pages/footprint-page/Footprint.jsx";
import About from "./pages/about-page/AboutPage.jsx";
import RecapContent from "./pages/repository-page/RecapContent.jsx";

import Loading from "./components/feedback/Loading.jsx";

import Indexpage from "./layouts/index/IndexLayout.jsx";
import Plan from "./pages/plan-page/plan-page.jsx";
import Resources from "./pages/resource-share-page/Resources.jsx";

import MemoSidebarNavigate from "./pages/memo-page/MemoSidebarNavigate";

import RenderInitialContent from "./features/render-articles/RenderInitialContent";
import { MEMOS } from "./_data/memo-page/memo";
import RenderMainContent from "./features/render-articles/RenderMainContent";
import { MEMOS_DATA } from "./_data/memo-page/memosData";
import RepositorySidebarNavigate from "./pages/repository-page/RepositorySidebarNavigate";
import AppLayout from "./layouts/app-layout/AppLayout";

const Homepage = lazy(() => import("./pages/home-page/Homepage.jsx"));

const router = createHashRouter([
    { path: "/", element: <Indexpage /> },
    {
        element: <AppLayout />,
        children: [
            {
                path: "/home",
                element: <Homepage />,
            },
            {
                path: "/plans",
                element: <Plan />,
            },
            {
                path: "/memo",
                element: <MemoSidebarNavigate />,
                children: [
                    {
                        index: true,
                        element: <RenderInitialContent files={MEMOS} />,
                    },
                    {
                        path: ":routeId",
                        element: <RenderMainContent data={MEMOS_DATA} />,
                    },
                ],
            },
            {
                path: "/repository",
                element: <RepositorySidebarNavigate />,
                children: [
                    // { index: true, element: <RecapSubNav />, },
                    { path: ":recapId", element: <RecapContent /> },
                ],
            },
            {
                path: "/footprint",
                element: <Footprint />,
            },
            // {
            //   path: '/projects',
            //   element: <Projects />
            // },
            {
                path: "/resources",
                element: <Resources />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;
