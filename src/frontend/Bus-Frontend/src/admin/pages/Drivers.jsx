import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DriversTable from "../components/DriversTable";
import "../styles/admin.css";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  licence: "",
  bus: "",
  route: "",
  experience: "",
  shift: "Morning",
  complaints: 0,
  status: "Active",
};

const Drivers = () => {
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john@gmail.com",
      phone: "0823456789",
      licence: "EC123456",
      bus: "BUS-102",
      route: "Downtown - Airport",
      experience: 5,
      shift: "Morning",
      complaints: 2,
      status: "Active",
    },
    {
      id: 2,
      name: "David Lee",
      email: "david@gmail.com",
      phone: "0835678901",
      licence: "EC654321",
      bus: "BUS-205",
      route: "City Centre - University",
      experience: 3,
      shift: "Afternoon",
      complaints: 0,
      status: "Active",
    },
  ]);

  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [editingDriver, setEditingDriver] = useState(null);

  const handleEdit = (driver) => {
    setEditingDriver(driver);
    setForm(driver);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this driver?")) {
      setDrivers(drivers.filter((driver) => driver.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.bus ||
      !form.route ||
      !form.phone
    ) {
      alert("Please complete all required fields.");
      return;
    }

    const duplicateEmail = drivers.find(
      (driver) =>
        driver.email.toLowerCase() === form.email.toLowerCase() &&
        driver.id !== editingDriver?.id
    );

    if (duplicateEmail) {
      alert("Email already exists.");
      return;
    }

    if (editingDriver) {
      setDrivers(
        drivers.map((driver) =>
          driver.id === editingDriver.id
            ? {
                ...form,
                id: editingDriver.id,
                experience: Number(form.experience),
              }
            : driver
        )
      );
    } else {
      setDrivers([
        ...drivers,
        {
          ...form,
          id: Date.now(),
          experience: Number(form.experience),
        },
      ]);
    }

    setForm(emptyForm);
    setEditingDriver(null);
    setShowForm(false);
  };

  const handleCancel = () => {
    setForm(emptyForm);
    setEditingDriver(null);
    setShowForm(false);
  };

  const filteredDrivers = drivers.filter(
    (driver) =>
      driver.name.toLowerCase().includes(search.toLowerCase()) ||
      driver.bus.toLowerCase().includes(search.toLowerCase()) ||
      driver.route.toLowerCase().includes(search.toLowerCase()) ||
      driver.status.toLowerCase().includes(search.toLowerCase())
  );
  
    return (
    <div className="table-container">
      <div className="section-header">
        <h2>Driver Management</h2>

        <button
          className="btn btn-add"
          onClick={() => (showForm ? handleCancel() : setShowForm(true))}
        >
          {showForm ? "Close Form" : "+ Add Driver"}
        </button>
      </div>

      {showForm && (
        <form className="form-container" onSubmit={handleSubmit}>
          <h3>{editingDriver ? "Edit Driver" : "Add New Driver"}</h3>

          <div className="form-group">
            <label>Driver Name</label>
            <input
              placeholder="Enter full name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              placeholder="0821234567"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Driver Licence Number</label>
            <input
              placeholder="EC123456"
              value={form.licence}
              onChange={(e) =>
                setForm({ ...form, licence: e.target.value.toUpperCase() })
              }
            />
          </div>

          <div className="form-group">
            <label>Assigned Bus</label>
            <input
              placeholder="BUS-102"
              value={form.bus}
              onChange={(e) =>
                setForm({ ...form, bus: e.target.value.toUpperCase() })
              }
            />
          </div>

          <div className="form-group">
            <label>Assigned Route</label>
            <input
              placeholder="Soshanguve - Pretoria CBD"
              value={form.route}
              onChange={(e) =>
                setForm({ ...form, route: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Years of Experience</label>
            <input
              type="number"
              min="0"
              value={form.experience}
              onChange={(e) =>
                setForm({ ...form, experience: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Shift</label>

            <select
              value={form.shift}
              onChange={(e) =>
                setForm({ ...form, shift: e.target.value })
              }
            >
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Night</option>
            </select>
          </div>

          <div className="form-group">
            <label>Status</label>

            <select
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
            >
              <option>Active</option>
              <option>On Leave</option>
              <option>Suspended</option>
            </select>
          </div>

          <button className="btn btn-add" type="submit">
            {editingDriver ? "Update Driver" : "Save Driver"}
          </button>
        </form>
      )}

      <SearchBar
        search={search}
        setSearch={setSearch}
        placeholder="Search by driver, bus, route or status..."
      />

      <DriversTable
        drivers={filteredDrivers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      
    </div>
  );
};

export default Drivers;