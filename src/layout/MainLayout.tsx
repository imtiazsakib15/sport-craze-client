import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-blue-900 w-full h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
