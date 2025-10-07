import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/api/students");
    setStudents(res.data);
  };

  useEffect(() => { fetchStudents(); }, []);

  return (
    <div className="app-container">
      <h1>🎓 Tuition Class Admin Panel</h1>
      <div className="main-content">
        <StudentForm
          selectedStudent={selectedStudent}
          refreshData={fetchStudents}
          clearSelection={() => setSelectedStudent(null)}
        />
        <StudentList
          students={students}
          refreshData={fetchStudents}
          selectStudent={setSelectedStudent}
        />
      </div>
    </div>
  );
};

export default App;
