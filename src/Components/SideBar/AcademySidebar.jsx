import SideBar from "./SideBar";


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


const AcademySidebar = () => {
  return (
    <div>
      {
        <SideBar data={data} />
      }
    </div>
  );
};

export default AcademySidebar;