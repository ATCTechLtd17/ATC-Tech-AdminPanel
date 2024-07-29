import { Outlet } from "react-router-dom";
import HRMSidebar from "../../Components/SideBar/HRMSidebar";

const HRMDashLayout = () => {
  return (
    <div className="w-full flex ">
      <div className="w-1/4">
        <HRMSidebar />
      </div>
      <div className="w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default HRMDashLayout;