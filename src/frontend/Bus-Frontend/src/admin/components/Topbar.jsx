import { FaUserCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="topbar">
      <h1>Admin Dashboard</h1>

      <div className="admin-profile">
        <FaUserCircle className="profile-icon" />
        <span>Administrator</span>
      </div>
    </div>
  );
};

export default Topbar;