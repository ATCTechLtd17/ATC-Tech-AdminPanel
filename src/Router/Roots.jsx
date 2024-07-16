import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AcademyLogin from "../Layout/Academy/AcademyLogin";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {},
        ]
    },
    // Academy route
    {
        path: "academy_login",
        element: <AcademyLogin />,
    },
    {
        path: "academy",
        element: <><p>academy</p></>,
        children: [
            {},
        ]
    },
]);

export default router