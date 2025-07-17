import React, { useState } from "react";
import "./NewGrievanceForm.css";

const NewGrievanceForm = () => {
  const [category, setCategory] = useState("");
  const [subFields, setSubFields] = useState({
    class: "",
    faculty: "",
    department: "",
    hostel: "",
    building: "",
    room: "",
    staff: "",
  });
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
      subFields,
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

  const renderSubCategory = () => {
    switch (category) {
      case "academic":
        return (
          <>
            <select
              value={subFields.class}
              onChange={(e) => setSubFields({ ...subFields, class: e.target.value })}
              required
            >
              <option value="">Select Course</option>
              <option value="Class A">BCA</option>
              <option value="Class B">BBA</option>
              <option value="Class C">MCA</option>
              <option value="Class C">MBA</option>
              <option value="Class C">B.tech</option>
              <option value="Class C">M.tech</option>
              <option value="Class C">LLB</option>
            </select>

            
          </>
        );

      case "administrative":
        return (
          <>
            <select
              value={subFields.department}
              onChange={(e) => setSubFields({ ...subFields, department: e.target.value })}
              required
            >
              <option value="">Select Department</option>
              <option value="Accounts">Accounts</option>
              <option value="HR">HR</option>
              <option value="Exam Cell">Exam Cell</option>
            </select>
          </>
        );

      case "infrastructure":
        return (
          <>
            <select
              value={subFields.building}
              onChange={(e) => setSubFields({ ...subFields, building: e.target.value })}
              required
            >
              <option value="">Select Building</option>
              <option value="Block A">Block A</option>
              <option value="Block B">Block B</option>
              <option value="Block C">Block C</option>
            </select>

            <select
              value={subFields.room}
              onChange={(e) => setSubFields({ ...subFields, room: e.target.value })}
              required
            >
              <option value="">Select Room</option>
              <option value="Room 101">Room 101</option>
              <option value="Room 102">Room 102</option>
              <option value="Room 103">Room 103</option>
            </select>
          </>
        );

      default:
        return null;
    }
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

          {category && renderSubCategory()}

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
