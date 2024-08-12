import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-full h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
