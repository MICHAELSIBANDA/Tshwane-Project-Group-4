import { useState } from "react";
import SearchBar from "../components/SearchBar";
import "../styles/admin.css";

const emptySchedule = {
  bus: "",
  driver: "",
  route: "",
  departure: "",
  arrival: "",
  delay: 0,
  status: "Scheduled",
};

const Schedules = () => {

  const [schedules, setSchedules] = useState([
    {
      id: 1,
      bus: "BUS-102",
      driver: "John Smith",
      route: "Downtown - Airport",
      departure: "08:00",
      arrival: "09:30",
      delay: 0,
      status: "Scheduled",
    },
    {
      id: 2,
      bus: "BUS-205",
      driver: "David Lee",
      route: "City Centre - University",
      departure: "10:00",
      arrival: "11:15",
      delay: 15,
      status: "Delayed",
    },
    {
      id: 3,
      bus: "BUS-310",
      driver: "Not Assigned",
      route: "Station - Mall",
      departure: "12:00",
      arrival: "13:00",
      delay: 0,
      status: "Cancelled",
    },
  ]);

  const [schedule, setSchedule] = useState(emptySchedule);
  const [editingSchedule, setEditingSchedule] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const handleEdit = (item) => {
    setEditingSchedule(item);
    setSchedule(item);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this schedule?")) {
      setSchedules(
        schedules.filter((schedule) => schedule.id !== id)
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !schedule.bus ||
      !schedule.driver ||
      !schedule.route
    ) {
      alert("Please complete all required fields.");
      return;
    }

    if (editingSchedule) {
      setSchedules(
        schedules.map((item) =>
          item.id === editingSchedule.id
            ? {
                ...schedule,
                id: editingSchedule.id,
                delay: Number(schedule.delay),
              }
            : item
        )
      );
    } else {
      setSchedules([
        ...schedules,
        {
          ...schedule,
          id: Date.now(),
          delay: Number(schedule.delay),
        },
      ]);
    }

    setSchedule(emptySchedule);
    setEditingSchedule(null);
    setShowForm(false);
  };

  const handleCancel = () => {
    setSchedule(emptySchedule);
    setEditingSchedule(null);
    setShowForm(false);
  };

  const filteredSchedules = schedules.filter(
    (item) =>
      item.bus.toLowerCase().includes(search.toLowerCase()) ||
      item.driver.toLowerCase().includes(search.toLowerCase()) ||
      item.route.toLowerCase().includes(search.toLowerCase()) ||
      item.status.toLowerCase().includes(search.toLowerCase())
  );
  
    return (
    <div className="table-container">

      <div className="section-header">
        <h2>Bus Scheduling</h2>

        <button
          className="btn btn-add"
          onClick={() => (showForm ? handleCancel() : setShowForm(true))}
        >
          {showForm ? "Close Form" : "+ Add Schedule"}
        </button>
      </div>

      {showForm && (

        <form className="form-container" onSubmit={handleSubmit}>

          <h3>
            {editingSchedule ? "Edit Schedule" : "Create Schedule"}
          </h3>

          <div className="form-group">
            <label>Bus Number</label>

            <input
              placeholder="BUS-102"
              value={schedule.bus}
              onChange={(e) =>
                setSchedule({
                  ...schedule,
                  bus: e.target.value.toUpperCase(),
                })
              }
            />
          </div>

          <div className="form-group">
            <label>Driver</label>

            <input
              placeholder="Driver Name"
              value={schedule.driver}
              onChange={(e) =>
                setSchedule({
                  ...schedule,
                  driver: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <label>Route</label>

            <input
              placeholder="Soshanguve - Pretoria CBD"
              value={schedule.route}
              onChange={(e) =>
                setSchedule({
                  ...schedule,
                  route: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <label>Departure Time</label>

            <input
              type="time"
              value={schedule.departure}
              onChange={(e) =>
                setSchedule({
                  ...schedule,
                  departure: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <label>Arrival Time</label>

            <input
              type="time"
              value={schedule.arrival}
              onChange={(e) =>
                setSchedule({
                  ...schedule,
                  arrival: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <label>Delay (Minutes)</label>

            <input
              type="number"
              min="0"
              value={schedule.delay}
              onChange={(e) =>
                setSchedule({
                  ...schedule,
                  delay: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <label>Status</label>

            <select
              value={schedule.status}
              onChange={(e) =>
                setSchedule({
                  ...schedule,
                  status: e.target.value,
                })
              }
            >
              <option>Scheduled</option>
              <option>Delayed</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>

          <button className="btn btn-add" type="submit">
            {editingSchedule ? "Update Schedule" : "Save Schedule"}
          </button>

        </form>

      )}

      <SearchBar
        search={search}
        setSearch={setSearch}
        placeholder="Search by bus, driver, route or status..."
      />

      <table>

        <thead>

          <tr>
            <th>Bus</th>
            <th>Driver</th>
            <th>Route</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Delay</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {filteredSchedules.map((item) => (

            <tr key={item.id}>

              <td>{item.bus}</td>

              <td>{item.driver}</td>

              <td>{item.route}</td>

              <td>{item.departure}</td>

              <td>{item.arrival}</td>

              <td>{item.delay} min</td>

              <td>

                <span
                  style={{
                    fontWeight: "bold",
                    color:
                      item.status === "Completed"
                        ? "green"
                        : item.status === "Delayed"
                        ? "orange"
                        : item.status === "Cancelled"
                        ? "red"
                        : "#1976d2",
                  }}
                >
                  {item.status}
                </span>

              </td>

              <td>

                <button
                  className="btn btn-edit"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-delete"
                  onClick={() => handleDelete(item.id)}
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

export default Schedules;