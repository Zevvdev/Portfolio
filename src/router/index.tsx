// src/router/index.tsx

import { createHashRouter, type RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Works from "../pages/Works";
import Contact from "../pages/Contact";
import App from "../App";



const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },
    { path: "/works", element: <Works /> },
    { path: "/contact", element: <Contact /> }, 

];

// router 생성 시, 모든 경로를 <App> 컴포넌트의 outlet으로 렌더링
const router = createHashRouter([{
    path: "/",
    element: <App />,
    children: routes,
}]);

export default router;