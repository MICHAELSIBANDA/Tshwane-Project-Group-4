import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UsersTable from "../components/UsersTable";
import "../styles/admin.css";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  cardNumber: "",
  balance: 0,
  accountType: "Student",
  status: "Active",
};

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Liya Gellem",
      email: "liya@gmail.com",
      phone: "0821234567",
      cardNumber: "1001",
      balance: 250,
      accountType: "Student",
      status: "Active",
    },
    {
      id: 2,
      name: "Tebza Nkosi",
      email: "tebza@gmail.com",
      phone: "0837654321",
      cardNumber: "1002",
      balance: 120,
      accountType: "Student",
      status: "Active",
    },
    {
      id: 3,
      name: "Sihle Ngena",
      email: "sihle@gmail.com",
      phone: "0845558899",
      cardNumber: "1003",
      balance: 0,
      accountType: "Staff",
      status: "Suspended",
    },
  ]);

  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (user) => {
    setEditingUser(user);
    setForm(user);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please complete all required fields.");
      return;
    }

    if (editingUser) {
      setUsers(
        users.map((user) =>
          user.id === editingUser.id
            ? {
                ...form,
                id: editingUser.id,
                balance: Number(form.balance),
              }
            : user
        )
      );
    } else {
      setUsers([
        ...users,
        {
          ...form,
          id: Date.now(),
          balance: Number(form.balance),
        },
      ]);
    }

    setForm(emptyForm);
    setEditingUser(null);
    setShowForm(false);
  };

  const handleCancel = () => {
    setForm(emptyForm);
    setEditingUser(null);
    setShowForm(false);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.cardNumber.toLowerCase().includes(search.toLowerCase()) ||
      user.accountType.toLowerCase().includes(search.toLowerCase())
  );
  
    return (
    <div className="table-container">
      <div className="section-header">
        <h2>User Management</h2>

        <button
          className="btn btn-add"
          onClick={() => (showForm ? handleCancel() : setShowForm(true))}
        >
          {showForm ? "Close Form" : "+ Add User"}
        </button>
      </div>

      {showForm && (
        <form className="form-container" onSubmit={handleSubmit}>
          <h3>{editingUser ? "Edit User" : "Register New User"}</h3>

          <div className="form-group">
            <label>Full Name</label>
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
            <label>Digital Bus Card Number</label>
            <input
              placeholder="1004"
              value={form.cardNumber}
              onChange={(e) =>
                setForm({ ...form, cardNumber: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Bus Card Balance (R)</label>
            <input
              type="number"
              min="0"
              value={form.balance}
              onChange={(e) =>
                setForm({ ...form, balance: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Account Type</label>

            <select
              value={form.accountType}
              onChange={(e) =>
                setForm({ ...form, accountType: e.target.value })
              }
            >
              <option>Student</option>
              <option>Staff</option>
              <option>Senior Citizen</option>
              <option>Guest</option>
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
              <option>Suspended</option>
              <option>Blocked</option>
            </select>
          </div>

          <button className="btn btn-add" type="submit">
            {editingUser ? "Update User" : "Save User"}
          </button>
        </form>
      )}

      <SearchBar
        search={search}
        setSearch={setSearch}
        placeholder="Search by name, email, card or account type..."
      />

      <UsersTable
        users={filteredUsers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      
    </div>
  );
};

export default Users;