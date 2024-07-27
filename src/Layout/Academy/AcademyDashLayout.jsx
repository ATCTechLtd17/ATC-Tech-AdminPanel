import { Outlet } from "react-router-dom";
import SideBar from "../../Components/SideBar/SideBar";


const AcademyDashLayout = () => {
    return (
        <div className="w-full flex ">
            <div className="w-1/4">
                <SideBar />
            </div>
            <div className="w-3/4">
                <Outlet />
            </div>
        </div>
    );
};

export default AcademyDashLayout;