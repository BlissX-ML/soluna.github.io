import "./App.scss";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import NavigationPage from "./pages/nav-bar/NavigationPage.jsx";
import Footprint from "./pages/footprint-page/Footprint.jsx";
import About from "./pages/about-page/about-page.jsx";
import RecapContent from "./pages/repository-page/RecapContent.jsx";

import Loading from "./pages/loading-page/Loading.jsx";
import RepositorySidebarNavigate from "./pages/repository-page/RepositorySidebarNavigate.jsx";
import Indexpage from "./layouts/index-page/IndexLayout.jsx";
import Plan from "./pages/plan-page/plan-page.jsx";
import Resources from "./pages/resource-share-page/Resources.jsx";
import HandbookItems from "./components/Interview-handbook-comps/ContentDynamicRoute/HandbookItems.jsx";

import RenderMemos from "./pages/memo-page/RenderMemos.jsx";
import MemoSidebarNavigate from "./pages/memo-page/MemoSidebarNavigate";

const Homepage = lazy(() => import("./pages/home-page/home-page.jsx"));

const router = createHashRouter([
    { path: "/", element: <Indexpage /> },
    {
        element: <NavigationPage />,
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
                    { index: true, element: <RenderMemos /> },
                    { path: ":handbookId", element: <HandbookItems /> },
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
