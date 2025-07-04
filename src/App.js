import React from "react";
import "./App.css";

const students = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: `Student ${i + 1}`,
  roll: `ROLL${1000 + i}`,
  email: `student${i + 1}@example.com`,
}));

function App() {
  return (
    <div className="App">
      <h1>Student Directory</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
