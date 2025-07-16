import React, { useState } from "react";
import "./AdminGrievanceDetail.css";

const AdminGrievanceDetail = () => {
  // Example data — replace with real API call later
  const grievance = {
    id: 1,
    email: "student1@example.com",
    subject: "Hostel Issue",
    category: "Accommodation",
    description: "There is water leakage in my hostel room 203, which is causing damage to my belongings.",
    document: "hostel_issue.pdf",
    status: "Pending",
  };

  const [status, setStatus] = useState(grievance.status);

  const handleStatusUpdate = (e) => {
    e.preventDefault();
    console.log(`Updating status to: ${status}`);
    alert(`Status updated to: ${status}`);
    // TODO: Send update to backend API
  };

  return (
    <div className="admin-grievance-detail">
      <h1>Grievance Details</h1>
      <div className="detail-card">
        <p><strong>Email:</strong> {grievance.email}</p>
        <p><strong>Subject:</strong> {grievance.subject}</p>
        <p><strong>Category:</strong> {grievance.category}</p>
        <p><strong>Description:</strong></p>
        <p className="description">{grievance.description}</p>
        <p>
          <strong>Document:</strong>{" "}
          <a
            href={`/uploads/${grievance.document}`}
            target="_blank"
            rel="noreferrer"
            className="doc-link"
          >
            {grievance.document}
          </a>
        </p>
        <form onSubmit={handleStatusUpdate} className="status-form">
          <label htmlFor="status-select">Update Status:</label>
          <select
            id="status-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
          <button type="submit">Update Status</button>
        </form>
      </div>
      
    </div>
  );
};

export default AdminGrievanceDetail;
