import { createBrowserRouter } from "react-router";
import App from "./App";
import { Scene } from "./app/components/scene";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/solarSystem',
        element: <Scene />
    }
])