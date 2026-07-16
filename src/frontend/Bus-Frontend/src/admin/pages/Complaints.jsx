import { useState } from "react";
import SearchBar from "../components/SearchBar";
import "../styles/admin.css";

const Complaints = () => {

  const [complaints, setComplaints] = useState([
    {
      id: 1,
      passenger: "Michael Brown",
      driver: "John Smith",
      bus: "BUS-102",
      category: "Late Bus",
      priority: "High",
      issue: "Bus arrived 35 minutes late.",
      response: "",
      date: "2026-07-12",
      status: "Pending",
    },
    {
      id: 2,
      passenger: "Sarah Wilson",
      driver: "David Lee",
      bus: "BUS-205",
      category: "Driver Behaviour",
      priority: "Medium",
      issue: "Driver was rude.",
      response: "Driver warned.",
      date: "2026-07-10",
      status: "Resolved",
    },
    {
      id: 3,
      passenger: "Liya Gellem",
      driver: "John Smith",
      bus: "BUS-102",
      category: "Overcrowding",
      priority: "Low",
      issue: "Too many passengers.",
      response: "",
      date: "2026-07-15",
      status: "Pending",
    },
  ]);

  const [search, setSearch] = useState("");

  const toggleStatus = (id) => {
    setComplaints(
      complaints.map((complaint) =>
        complaint.id === id
          ? {
              ...complaint,
              status:
                complaint.status === "Pending"
                  ? "Resolved"
                  : "Pending",
            }
          : complaint
      )
    );
  };

  const deleteComplaint = (id) => {
    if (window.confirm("Delete complaint?")) {
      setComplaints(
        complaints.filter((complaint) => complaint.id !== id)
      );
    }
  };

  const filteredComplaints = complaints.filter(
    (complaint) =>
      complaint.passenger
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      complaint.driver
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      complaint.category
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      complaint.status
        .toLowerCase()
        .includes(search.toLowerCase())
  );
  
    return (
    <div className="table-container">

      <div className="section-header">
        <h2>Complaint Management</h2>
      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
        placeholder="Search passenger, driver, category or status..."
      />

      

      <table>

        <thead>

          <tr>
            <th>Passenger</th>
            <th>Driver</th>
            <th>Bus</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Description</th>
            <th>Admin Response</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {filteredComplaints.map((complaint) => (

            <tr key={complaint.id}>

              <td>{complaint.passenger}</td>

              <td>{complaint.driver}</td>

              <td>{complaint.bus}</td>

              <td>{complaint.category}</td>

              <td>

                <span
                  style={{
                    color:
                      complaint.priority === "High"
                        ? "red"
                        : complaint.priority === "Medium"
                        ? "orange"
                        : "green",
                    fontWeight: "bold",
                  }}
                >
                  {complaint.priority}
                </span>

              </td>

              <td>{complaint.issue}</td>

              <td>

                {complaint.response === ""
                  ? "Awaiting Response"
                  : complaint.response}

              </td>

              <td>{complaint.date}</td>

              <td>{complaint.status}</td>

              <td>

                <button
                  className="btn btn-edit"
                  onClick={() => toggleStatus(complaint.id)}
                >
                  {complaint.status === "Pending"
                    ? "Resolve"
                    : "Reopen"}
                </button>

                <button
                  className="btn btn-delete"
                  onClick={() => deleteComplaint(complaint.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default Complaints;