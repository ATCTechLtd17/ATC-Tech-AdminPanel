import SideBar from "./SideBar";

const data = [
  {
    "id": 1,
    "img": "",
    "name": "Employee Information",
    "link": 'employee_information'
  },
  {
    "id": 2,
    "img": "",
    "name": "Payroll",
    "link": 'payroll'
  },
  {
    "id": 3,
    "img": "",
    "name": "Salary",
    "link": 'salary'
  },
  {
    "id": 4,
    "img": "",
    "name": "Report",
    "link": 'report'
  },
]

const HRMSidebar = () => {
  return (
    <div>
      {
        <SideBar data={data} />
      }
    </div>
  );
};

export default HRMSidebar;