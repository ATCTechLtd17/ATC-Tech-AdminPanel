import { Outlet } from "react-router-dom";
import SideBar from "../../Components/SideBar/SideBar";


const AcademyDashLayout = () => {
    return (
        <div>
        
            <Outlet />
            <SideBar/>
        </div>
    );
};

export default AcademyDashLayout;