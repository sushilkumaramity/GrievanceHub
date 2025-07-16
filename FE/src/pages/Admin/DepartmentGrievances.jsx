import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DepartmentGrievances.css";

const DepartmentGrievances = () => {
  const { deptName } = useParams();
  const navigate = useNavigate();
  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("grievances")) || [];
    const filtered = stored.filter(g => g.category === deptName);
    setGrievances(filtered);
  }, [deptName]);

  return (
    <div className="department-page">
      <header className="department-header">
        <h1>{deptName.charAt(0).toUpperCase() + deptName.slice(1)} Department Grievances</h1>
        <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      </header>

      {grievances.length === 0 ? (
        <p className="no-grievance-text">No grievances submitted in this department.</p>
      ) : (
        grievances.map((g) => (
          <div key={g.id} className="grievance-card">
            <h3>Grievance #{g.id}</h3>
            <p><strong>Name:</strong> {g.name || "N/A"}</p>
            <p><strong>Email:</strong> {g.email || "N/A"}</p>
            <p><strong>Description:</strong> {g.details}</p>
            {g.attachmentName && (
              <p><strong>Attachment:</strong> {g.attachmentName}</p>
            )}
            <p><strong>Submitted:</strong> {new Date(g.id).toLocaleString()}</p>
            <p><strong>Status:</strong> {g.status}</p>
          </div>
        ))
      )}
     
    </div>
  );
};

export default DepartmentGrievances;
