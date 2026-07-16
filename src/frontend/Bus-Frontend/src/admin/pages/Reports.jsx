import "../styles/admin.css";
import {
  stats,
  buses,
  users,
  drivers,
  schedules,
  complaints,
} from "../data/dummyData";

const Reports = () => {
  const fleetAvailability = (
    (stats.activeBuses / stats.buses) *
    100
  ).toFixed(1);

  const generateReport = () => {
    const report = `
===========================================
TSHWANE BUS MANAGEMENT SYSTEM
OPERATIONAL REPORT
===========================================

Generated:
${new Date().toLocaleString()}

-------------------------------------------

USERS

Registered Users : ${users.length}
Active Users     : ${
      users.filter((u) => u.status === "Active").length
    }
Suspended Users : ${
      users.filter((u) => u.status === "Suspended").length
    }

-------------------------------------------

DRIVERS

Total Drivers    : ${drivers.length}
Active Drivers   : ${
      drivers.filter((d) => d.status === "Active").length
    }

-------------------------------------------

BUSES

Total Buses          : ${buses.length}
Available Buses      : ${stats.activeBuses}
Maintenance Buses    : ${stats.maintenanceBuses}
Inactive Buses       : ${stats.inactiveBuses}

Fleet Availability   : ${fleetAvailability}%

-------------------------------------------

SCHEDULES

Scheduled Trips : ${stats.scheduledTrips}
Completed Trips : ${stats.trips}

-------------------------------------------

COMPLAINTS

Pending Complaints  : ${stats.pendingComplaints}
Resolved Complaints : ${stats.resolvedComplaints}

-------------------------------------------

SYSTEM STATUS

Status : Operational

===========================================

Generated automatically by
Tshwane Bus Management System

`;

    const blob = new Blob([report], {
      type: "text/plain",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = `Operational_Report_${new Date()
      .toISOString()
      .slice(0, 10)}.txt`;

    link.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className="cards">
        <div className="card">
          <h2>{users.length}</h2>
          <p>Total Users</p>
        </div>

        <div className="card">
          <h2>{drivers.length}</h2>
          <p>Total Drivers</p>
        </div>

        <div className="card">
          <h2>{buses.length}</h2>
          <p>Total Buses</p>
        </div>

        <div className="card">
          <h2>{stats.trips}</h2>
          <p>Completed Trips</p>
        </div>
      </div>

      <div className="table-container">
        <h2>Operational Report</h2>

        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Result</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Fleet Availability</td>
              <td>
                {stats.activeBuses}/{buses.length} Buses Available
              </td>
              <td>Good</td>
            </tr>

            <tr>
              <td>Buses In Maintenance</td>
              <td>{stats.maintenanceBuses}</td>
              <td>Attention</td>
            </tr>

            <tr>
              <td>Registered Users</td>
              <td>{users.length}</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>Drivers</td>
              <td>{drivers.length}</td>
              <td>Available</td>
            </tr>

            <tr>
              <td>Completed Trips</td>
              <td>{stats.trips}</td>
              <td>Completed</td>
            </tr>

            <tr>
              <td>Scheduled Trips</td>
              <td>{stats.scheduledTrips}</td>
              <td>Running</td>
            </tr>

            <tr>
              <td>Pending Complaints</td>
              <td>{stats.pendingComplaints}</td>
              <td>Open</td>
            </tr>

            <tr>
              <td>Resolved Complaints</td>
              <td>{stats.resolvedComplaints}</td>
              <td>Resolved</td>
            </tr>

            <tr>
              <td>Fleet Utilisation</td>
              <td>{fleetAvailability}%</td>
              <td>Excellent</td>
            </tr>
          </tbody>
        </table>

        <button className="btn btn-add" onClick={generateReport}>
          Generate Report
        </button>
      </div>
    </>
  );
};

export default Reports;