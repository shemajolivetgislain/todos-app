import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex  w-full min-h-screen h-screen">
      <SideBar />
      <div className="flex flex-col w-full">
        <NavBar />
        <div className="flex-grow overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
