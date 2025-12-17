// src/router/index.tsx

import { createHashRouter, type RouteObject } from "react-router-dom";
import Home from "../pages/Home";



const routes: RouteObject[] = [
    { path: "/", element: <Home /> },

];

const router = createHashRouter(routes);

export default router;