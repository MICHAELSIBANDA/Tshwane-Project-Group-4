import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate();


  const handleLogout = () => {

    localStorage.clear();

    navigate("/");

  };


  return (

    <div className="sidebar">


      <div>

        <h2 className="logo">
          BusLink
        </h2>


        <ul>

          <li>
            <NavLink to="/admin">
              Dashboard
            </NavLink>
          </li>


          <li>
            <NavLink to="/admin/users">
              Users
            </NavLink>
          </li>


          <li>
            <NavLink to="/admin/drivers">
              Drivers
            </NavLink>
          </li>


          <li>
            <NavLink to="/admin/buses">
              Buses
            </NavLink>
          </li>


          <li>
            <NavLink to="/admin/schedules">
              Schedules
            </NavLink>
          </li>


          <li>
            <NavLink to="/admin/complaints">
              Complaints
            </NavLink>
          </li>


          <li>
            <NavLink to="/admin/reports">
              Reports
            </NavLink>
          </li>


        </ul>

      </div>


      <div className="sidebar-bottom">

        <button
          className="sidebar-logout"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>


    </div>

  );

};


export default Sidebar;