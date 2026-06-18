import { useState } from "react";

function StudentForm() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert(
      `Name: ${student.name}\nEmail: ${student.email}\nCourse: ${student.course}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={student.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={student.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="course"
        placeholder="Enter Course"
        value={student.course}
        onChange={handleChange}
        required
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default StudentForm;