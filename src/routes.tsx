import {createBrowserRouter, Outlet} from 'react-router-dom';
import Header from "./layout/Header.tsx";
import Main from "./pages/Main.tsx";
import About from "./pages/About.tsx";
import Features from "./pages/Features.tsx";
import Contact from "./pages/Contact.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <Outlet />
            </>
        ),
        children: [
            { index: true, element: <Main/>},
            { path: "about", element: <About/>},
            { path: "features", element: <Features/>},
            { path: "contact", element: <Contact/>}
        ]
    },
]);
