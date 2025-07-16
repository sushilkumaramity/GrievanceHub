import React, { useState, useEffect } from "react";
import "./GrievanceStatus.css";

const GrievanceStatus = () => {
  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    // MOCK: Replace with real fetch from backend
    const mockGrievances = [
      {
        id: 1,
        category: "Academic",
        details: "Issue with exam results.",
        status: "Pending",
        submittedAt: "2025-07-16",
      },
      {
        id: 2,
        category: "Infrastructure",
        details: "Broken classroom projector.",
        status: "Resolved",
        submittedAt: "2025-07-14",
      },
    ];
    setGrievances(mockGrievances);
  }, []);

  return (
    <div className="status-page">
      <div className="status-container">
        <h2>Your Grievances</h2>
        {grievances.length === 0 ? (
          <p>No grievances found.</p>
        ) : (
          <div className="status-list">
            {grievances.map((g) => (
              <div key={g.id} className="status-card">
                <h3>{g.category} Grievance</h3>
                <p><strong>Details:</strong> {g.details}</p>
                <p><strong>Status:</strong> <span className={`status-${g.status.toLowerCase()}`}>{g.status}</span></p>
                <p><strong>Submitted:</strong> {g.submittedAt}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
};

export default GrievanceStatus;
