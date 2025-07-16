import React from "react";
import "./AdminUsers.css";

const AdminUsers = () => {
  // Dummy users — replace with real data later
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Student" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Staff" },
    { id: 3, name: "Admin User", email: "admin@example.com", role: "Admin" },
  ];

  const handleAddUser = () => {
    alert("Add user clicked (implement modal or form here)");
  };

  const handleEditUser = (id) => {
    alert(`Edit user ${id} clicked`);
  };

  const handleDeleteUser = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      alert(`User ${id} deleted`);
    }
  };

  return (
    <div className="admin-users">
      <h1>Manage Users</h1>
      <button className="add-user-btn" onClick={handleAddUser}>+ Add User</button>

      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <button
                    className="action-btn edit-btn"
                    onClick={() => handleEditUser(u.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="action-btn delete-btn"
                    onClick={() => handleDeleteUser(u.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default AdminUsers;
