import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CourseAndDurationSetup from "../Academy Pages/CourseAndDurationSetup";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: 'course_duration',
                element: <CourseAndDurationSetup />
            },
        ]
    },
]);

export default router