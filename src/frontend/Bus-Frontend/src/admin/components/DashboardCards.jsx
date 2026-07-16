import { stats } from "../data/dummyData";

const DashboardCards = () => {
  return (
    <div className="cards">

      <div className="card">
        <h2>{stats.users}</h2>
        <p>Total Users</p>
      </div>

      <div className="card">
        <h2>{stats.drivers}</h2>
        <p>Drivers</p>
      </div>

      <div className="card">
        <h2>{stats.buses}</h2>
        <p>Buses</p>
      </div>

      <div className="card">
        <h2>{stats.trips}</h2>
        <p>Today's Trips</p>
      </div>

    </div>
  );
};

export default DashboardCards;