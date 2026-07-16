import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "./admin/layouts/AdminLayout";

import AdminDashboard from "./admin/pages/AdminDashboard";
import Users from "./admin/pages/Users";
import Drivers from "./admin/pages/Drivers";
import Buses from "./admin/pages/Buses";
import Schedules from "./admin/pages/Schedules";
import Complaints from "./admin/pages/Complaints";
import Reports from "./admin/pages/Reports";


function App() {

  return (

    <Routes>

    <Route path="/" element={<Navigate to="/admin" replace />} />

    <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="drivers" element={<Drivers />} />
        <Route path="buses" element={<Buses />} />
        <Route path="schedules" element={<Schedules />} />
        <Route path="complaints" element={<Complaints />} />
        <Route path="reports" element={<Reports />} />
    </Route>

</Routes>

  );

}


export default App;