import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import Header from "../../shared/Header";
import BreadCrumb from "../../shared/BreadCrumb";

function Dashboard() {
  return (
    <div className="flex flex-row justify-center">
      <div className="w-80">
        <Navbar />
      </div>
      <div className="w-full flex flex-col h-screen p-5">
        <Header />
        <BreadCrumb />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
