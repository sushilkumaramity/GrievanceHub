import React from "react";
import "./AdminReports.css";

const AdminReports = () => {
  // Dummy summary data — replace with real API later
  const summary = {
    totalGrievances: 120,
    pending: 40,
    resolved: 70,
    inProgress: 10,
  };

  const handleDownload = () => {
    alert("Downloading report... (hook this to backend export)");
  };

  return (
    <div className="admin-reports">
      <h1>Reports & Analytics</h1>
      <p>Analyze grievance trends and download reports for record-keeping.</p>

      <div className="report-summary">
        <div className="report-card">
          <h3>Total Grievances</h3>
          <p>{summary.totalGrievances}</p>
        </div>
        <div className="report-card">
          <h3>Pending</h3>
          <p>{summary.pending}</p>
        </div>
        <div className="report-card">
          <h3>Resolved</h3>
          <p>{summary.resolved}</p>
        </div>
        <div className="report-card">
          <h3>In Progress</h3>
          <p>{summary.inProgress}</p>
        </div>
      </div>

      <button className="download-btn" onClick={handleDownload}>
        Download Full Report
      </button>
      
    </div>
  );
};

export default AdminReports;
