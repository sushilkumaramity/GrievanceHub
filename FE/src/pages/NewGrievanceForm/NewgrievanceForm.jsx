import React, { useState } from "react";
import "./NewGrievanceForm.css";

const NewGrievanceForm = () => {
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");
  const [attachment, setAttachment] = useState(null);

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const handleFileChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGrievance = {
      id: Date.now(),
      category,
      details,
      attachmentName: attachment ? attachment.name : null,
      name: user.name || "Unknown",
      email: user.email || "Unknown",
      status: "Submitted",
    };

    const existing = JSON.parse(localStorage.getItem("grievances")) || [];
    existing.push(newGrievance);
    localStorage.setItem("grievances", JSON.stringify(existing));

    alert("Grievance submitted successfully!");
  };

  return (
    <div className="grievance-form-page">
      <div className="grievance-form-container">
        <h2>File a New Grievance</h2>
        <form onSubmit={handleSubmit}>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="academic">Academic</option>
            <option value="administrative">Administrative</option>
            <option value="infrastructure">Infrastructure</option>
            <option value="other">Other</option>
          </select>

          {category && (
            <>
              <textarea
                placeholder="Describe your grievance..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
              />

              <label htmlFor="attachment" className="file-label">
                Attach Supporting Document
              </label>
              <input
                type="file"
                id="attachment"
                onChange={handleFileChange}
              />

              <button type="submit">Submit Grievance</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewGrievanceForm;
