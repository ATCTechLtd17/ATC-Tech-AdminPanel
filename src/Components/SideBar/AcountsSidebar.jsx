import SideBar from "./SideBar";

const data = [
  {
    "id": 1,
    "img": "",
    "name": "Income",
    "link": 'income'
  },
  {
    "id": 2,
    "img": "",
    "name": "Expense",
    "link": 'expense'
  },
]


const AcountsSidebar = () => {
  return (
    <div>
      {
        <SideBar data={data} />
      }
    </div>
  );
};

export default AcountsSidebar;