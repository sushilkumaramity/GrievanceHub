import React from "react";
import { Link } from "react-router-dom";
import "./AdminGrievanceList.css";

const AdminGrievanceList = () => {
  // Mock data — replace with real API data later
  const grievances = [
    {
      id: 1,
      email: "student1@example.com",
      subject: "Hostel Issue",
      category: "Accommodation",
      description: "Water leakage in room 203.",
      document: "hostel_issue.pdf",
      status: "Pending"
    },
    {
      id: 2,
      email: "student2@example.com",
      subject: "Wifi Not Working",
      category: "IT Services",
      description: "No internet access in Block B.",
      document: "wifi_report.pdf",
      status: "Resolved"
    }
  ];

  return (
    <div className="admin-grievance-list">
      <h1>All Grievances</h1>
      <div className="table-wrapper">
        <table className="grievance-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Category</th>
              <th>Description</th>
              <th>Document</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {grievances.map((g) => (
              <tr key={g.id}>
                <td>{g.id}</td>
                <td>{g.email}</td>
                <td>{g.subject}</td>
                <td>{g.category}</td>
                <td>{g.description}</td>
                <td>
                  <a
                    href={`/uploads/${g.document}`}
                    target="_blank"
                    rel="noreferrer"
                    className="doc-link"
                  >
                    {g.document}
                  </a>
                </td>
                <td>
                  <span className={`status ${g.status.toLowerCase()}`}>
                    {g.status}
                  </span>
                </td>
                <td>
                  <Link to={`/admin/grievance/${g.id}`} className="view-link">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default AdminGrievanceList;
