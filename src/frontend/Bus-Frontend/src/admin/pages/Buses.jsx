import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BusTable from "../components/BusTable";
import "../styles/admin.css";

const emptyForm = {
  number: "",
  route: "",
  capacity: "",
  driver: "",
  status: "Active",
};

const Buses = () => {
  const [buses, setBuses] = useState([
    {
      id: 1,
      number: "BUS-102",
      route: "Downtown - Airport",
      capacity: 50,
      driver: "John Smith",
      status: "Active",
    },
    {
      id: 2,
      number: "BUS-205",
      route: "City Centre - University",
      capacity: 45,
      driver: "David Lee",
      status: "Active",
    },
    {
      id: 3,
      number: "BUS-310",
      route: "Station - Mall",
      capacity: 55,
      driver: "Not Assigned",
      status: "Maintenance",
    },
  ]);

  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [editingBus, setEditingBus] = useState(null);

  const handleEdit = (bus) => {
    setEditingBus(bus);

    setForm({
      number: bus.number,
      route: bus.route,
      capacity: bus.capacity,
      driver: bus.driver,
      status: bus.status,
    });

    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this bus?")) {
      setBuses(buses.filter((bus) => bus.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.number.trim() === "" ||
      form.route.trim() === "" ||
      form.driver.trim() === ""
    ) {
      alert("Please complete all required fields.");
      return;
    }

    if (Number(form.capacity) <= 0) {
      alert("Capacity must be greater than zero.");
      return;
    }

    const duplicateBus = buses.find(
      (bus) =>
        bus.number.toLowerCase() === form.number.toLowerCase() &&
        bus.id !== editingBus?.id
    );

    if (duplicateBus) {
      alert("Bus number already exists.");
      return;
    }

    if (editingBus) {
      setBuses(
        buses.map((bus) =>
          bus.id === editingBus.id
            ? {
                ...form,
                capacity: Number(form.capacity),
                id: editingBus.id,
              }
            : bus
        )
      );
    } else {
      setBuses([
        ...buses,
        {
          ...form,
          capacity: Number(form.capacity),
          id: Date.now(),
        },
      ]);
    }

    setForm(emptyForm);
    setEditingBus(null);
    setShowForm(false);
  };

  const handleCancel = () => {
    setForm(emptyForm);
    setEditingBus(null);
    setShowForm(false);
  };

  const filteredBuses = buses.filter(
    (bus) =>
      bus.number.toLowerCase().includes(search.toLowerCase()) ||
      bus.route.toLowerCase().includes(search.toLowerCase()) ||
      bus.driver.toLowerCase().includes(search.toLowerCase()) ||
      bus.status.toLowerCase().includes(search.toLowerCase())
  );
    return (
    <div className="table-container">
      <div className="section-header">
        <h2>Bus Management</h2>

        <button
          className="btn btn-add"
          onClick={() => (showForm ? handleCancel() : setShowForm(true))}
        >
          {showForm ? "Close Form" : "+ Add Bus"}
        </button>
      </div>

      {showForm && (
        <form className="form-container" onSubmit={handleSubmit}>
          <h3>{editingBus ? "Edit Bus" : "Add New Bus"}</h3>

          <div className="form-group">
            <label>Bus Number</label>
            <input
              placeholder="BUS-101"
              value={form.number}
              onChange={(e) =>
                setForm({ ...form, number: e.target.value.toUpperCase() })
              }
            />
          </div>

          <div className="form-group">
            <label>Route</label>
            <input
              placeholder="e.g. Soshanguve - Pretoria CBD"
              value={form.route}
              onChange={(e) =>
                setForm({ ...form, route: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Passenger Capacity</label>
            <input
              type="number"
              placeholder="50"
              value={form.capacity}
              onChange={(e) =>
                setForm({ ...form, capacity: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Assigned Driver</label>
            <input
              placeholder="Driver name"
              value={form.driver}
              onChange={(e) =>
                setForm({ ...form, driver: e.target.value })
              }
            />
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
              <option>Maintenance</option>
              <option>Out of Service</option>
            </select>
          </div>

          <button className="btn btn-add" type="submit">
            {editingBus ? "Update Bus" : "Save Bus"}
          </button>
        </form>
      )}

      <SearchBar
        search={search}
        setSearch={setSearch}
        placeholder="Search bus number, route, driver or status..."
      />

      <BusTable
        buses={filteredBuses}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      
    </div>
  );
};

export default Buses;