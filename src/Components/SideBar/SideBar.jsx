
import { NavLink } from "react-router-dom";
import SidebarTitle from "./SidebarTitle";

const data = [
  {
    "id": 1,
    "img": "",
    "name": "Course Setup",
    "link": 'course_setup'
  },
  {
    "id": 2,
    "img": "",
    "name": "Fees Setup",
    "link": 'fees_setup'
  },
  {
    "id": 3,
    "img": "",
    "name": "Installment Setup",
    "link": 'installment_setup'
  },
  {
    "id": 4,
    "img": "",
    "name": "Create Student Id",
    "link": 'create_student_id'
  },
  {
    "id": 5,
    "img": "",
    "name": "Student List",
    "link": 'student_list'
  },
  {
    "id": 6,
    "img": "",
    "name": "Student Status",
    "link": 'student_status'
  },
  {
    "id": 7,
    "img": "",
    "name": "Total Running Student",
    "link": 'total_running_student'
  },
  {
    "id": 8,
    "img": "",
    "name": "Total Old Student",
    "link": 'total_old_student'
  },
  {
    "id": 9,
    "img": "",
    "name": "Create Teacher Id",
    "link": 'create_teacher_id'
  },
  {
    "id": 10,
    "img": "",
    "name": "Teacher List",
    "link": 'teacher_list'
  },
  {
    "id": 11,
    "img": "",
    "name": "Search Teacher",
    "link": 'search_teacher'
  },
  {
    "id": 12,
    "img": "",
    "name": "Money Receipt",
    "link": 'money_receipt'
  },

]

const SideBar = () => {
  return (
    <div className="w-full">
      <div className=" md:block w-full min-h-screen p-3 space-y-2  bg-gray-300 text-gray-800">
        <div className="divide-y divide-gray-300">

          <ul className="pt-2 pb-4 px-1 space-y-3 text-sm font-normal text-black flex flex-col ">
            <SidebarTitle />
            {
              data.map((data, idx) => {
                return (<NavLink key={idx} data={data} className="" to={data.link}>
                  <li className="flex items-center p-2 space-x-3  bg-gray-100 hover:bg-[#0F79B9] hover:text-white rounded-md transform hover:scale-105 duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current text-gray-600"
                    >
                      <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                    </svg>
                    <span>{data.name}</span>
                  </li>
                </NavLink>
                )
              }
              )
            }
          </ul>

          <ul className="pt-4 pb-2 space-y-1 text-sm">
            <li>

              <NavLink to={"/settings"}>
                <p
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md transform hover:scale-105 duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current text-gray-600"
                  >
                    <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                    <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
                  </svg>
                  <span>Settings</span>
                </p>
              </NavLink>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md transform hover:scale-105 duration-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current text-gray-600"
                >
                  <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                  <rect width="32" height="64" x="256" y="232"></rect>
                </svg>
                <button >
                  <span>Logout</span>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;