import { Outlet } from "react-router-dom";
import AcademySidebar from "../../Components/SideBar/AcademySidebar";


const AcademyDashLayout = () => {
    return (
        <div className="w-full flex ">
            <div className="w-1/4">
                <AcademySidebar />
            </div>
            <div className="w-3/4">
                <Outlet />
            </div>
        </div>
    );
};

export default AcademyDashLayout;