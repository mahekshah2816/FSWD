import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentForm.css";

const StudentForm = ({ selectedStudent, refreshData, clearSelection }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
    email: "",
  });

  useEffect(() => {
    if (selectedStudent) setFormData(selectedStudent);
  }, [selectedStudent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedStudent) {
      await axios.put(`http://localhost:5000/api/students/${selectedStudent._id}`, formData);
    } else {
      await axios.post("http://localhost:5000/api/students", formData);
    }
    refreshData();
    clearSelection();
    setFormData({ name: "", age: "", course: "", email: "" });
  };

  return (
    <div className="form-container">
      <h2>{selectedStudent ? "Edit Student" : "Add Student"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <button type="submit">{selectedStudent ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default StudentForm;
