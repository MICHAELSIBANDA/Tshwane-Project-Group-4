import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import "../styles/admin.css";


const AdminLayout = () => {

  return (

    <div className="dashboard">

      <Sidebar />


      <div className="main">

        <Topbar />


        <Outlet />


      </div>


    </div>

  );

};


export default AdminLayout;