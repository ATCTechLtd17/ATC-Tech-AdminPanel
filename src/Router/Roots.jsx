import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AcademyLogin from "../Layout/Academy/AcademyLogin";
import AcademyDashLayout from "../Layout/Academy/AcademyDashLayout";
import CourseAndDurationSetup from "../Pages/Academy Pages/CourseAndDurationSetup";




const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    // Academy route
    {
        path: "academy_login",
        element: <AcademyLogin />,
    },
    {
        path: "academy",
        element: <AcademyDashLayout />,
        children: [
            {
                path: 'course_duration',
                element: <CourseAndDurationSetup />
            },
        ]
    },

]);

export default router