import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AcademyLogin from "../Layout/Academy/AcademyLogin";
import AcademyDashLayout from "../Layout/Academy/AcademyDashLayout";
import CourseSetup from "../Pages/Academy Pages/CourseSetup";
import FeesSetup from "../Pages/Academy Pages/FeesSetup";
import InstallmentSetup from "../Pages/Academy Pages/InstallmentSetup";
import CreateStudentId from "../Pages/Academy Pages/CreateStudentId";
import StudentList from "../Pages/Academy Pages/StudentList";
import StudentStatus from "../Pages/Academy Pages/StudentStatus";
import TotalRunningStudent from "../Pages/Academy Pages/TotalRunningStudent";
import TotalOldStudent from "../Pages/Academy Pages/TotalOldStudent";
import CreateTeacherId from "../Pages/Academy Pages/CreateTeacherId";
import TeacherList from "../Pages/Academy Pages/TeacherList";
import SearchTeacher from "../Pages/Academy Pages/SearchTeacher";
import MoneyReceipt from "../Pages/Academy Pages/MoneyReceipt";
import AccountsLogin from "../Layout/Accounts/AccountsLogin";
import Income from "../Pages/Accounts Pages/Income";
import Expense from "../Pages/Accounts Pages/Expense";
import AccountsDashLayout from "../Layout/Accounts/AccountsDashLayout";
import HRMLogin from "../Layout/HRM/HRMLogin";
import HRMDashLayout from "../Layout/HRM/HRMDashLayout";
import EmployeeInformation from "../Pages/HRM Pages/EmployeeInformation";
import Payroll from "../Pages/HRM Pages/Payroll";
import Salary from "../Pages/HRM Pages/Salary";
import Report from "../Pages/HRM Pages/Report";




const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },


    // Academy Route:


    {
        path: "academy_login",
        element: <AcademyLogin />,
    },
    {
        path: "academy",
        element: <AcademyDashLayout />,
        children: [
            {
                path: 'course_setup',
                element: <CourseSetup />
            },
            // {
            //     path: 'fees_setup',
            //     element: <FeesSetup />
            // },
            // {
            //     path: 'installment_setup',
            //     element: <InstallmentSetup />
            // },
            {
                path: 'create_student_id',
                element: <CreateStudentId />
            },
            {
                path: 'student_list',
                element: <StudentList />
            },
            {
                path: 'student_status',
                element: <StudentStatus />
            },
            {
                path: 'total_running_student',
                element: <TotalRunningStudent />
            },
            {
                path: 'total_old_student',
                element: <TotalOldStudent />
            },
            {
                path: 'create_teacher_id',
                element: <CreateTeacherId />
            },
            {
                path: 'teacher_list',
                element: <TeacherList />
            },
            {
                path: 'search_teacher',
                element: <SearchTeacher />
            },
            {
                path: 'money_receipt',
                element: <MoneyReceipt />
            },
        ]
    },


    //Acounts Route:


    {
        path: "accounts_login",
        element: <AccountsLogin />,
    },

    {
        path: "accounts",
        element: <AccountsDashLayout />,
        children: [
            {
                path: 'income',
                element: <Income />
            },
            {
                path: 'expense',
                element: <Expense />
            },


        ]
    },


    //HRM Route:


    {
        path: "hrm_login",
        element: <HRMLogin />,
    },
    {
        path: "hrm",
        element: <HRMDashLayout />,
        children: [
            {
                path: 'employee_information',
                element: <EmployeeInformation />
            },
            {
                path: 'payroll',
                element: <Payroll />
            },
            {
                path: 'salary',
                element: <Salary />
            },
            {
                path: 'report',
                element: <Report />
            },

        ]
    },

]);

export default router