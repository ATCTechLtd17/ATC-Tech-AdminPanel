import { Outlet } from "react-router-dom";
import AcountsSidebar from './../../Components/SideBar/AcountsSidebar'


const AccountsDashLayout = () => {
  return (
    <div className="w-full flex ">
      <div className="w-1/4">
        <AcountsSidebar />
      </div>
      <div className="w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountsDashLayout;