import React from "react";
import axios from "axios";
import "./StudentList.css";

const StudentList = ({ students, refreshData, selectStudent }) => {
  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/api/students/${id}`);
    refreshData();
  };

  return (
    <div className="list-container">
      <h2>Student Records</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Age</th><th>Course</th><th>Email</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.course}</td>
              <td>{s.email}</td>
              <td>
                <button className="edit" onClick={() => selectStudent(s)}>Edit</button>
                <button className="delete" onClick={() => deleteStudent(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
