import React, { useState, useEffect } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

export default function App() {
  const [student, setStudent] = useState({
    id: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    image: "",
    collegeName: "",
    collegeAddress: "",
    collegeCountry: "select",
    collegeLogo: "",
  });

  const [students, setStudents] = useState([]);
  const [isValidDetails, setDetails] = useState(false);
  const [isEditted, setisEditted] = useState(false);

  useEffect(() => {
    if (
      !student.id ||
      !student.firstName ||
      !student.lastName ||
      !student.dob ||
      !student.gender ||
      !student.collegeName ||
      !student.collegeAddress ||
      student.collegeCountry === "select" ||
      !student.image ||
      !student.collegeLogo
    ) {
      setDetails(false);
    } else {
      setDetails(true);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setStudents([...students, { ...student }]);
    setStudent({
      id: "",
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      image: "",
      collegeName: "",
      collegeAddress: "",
      collegeCountry: "",
      collegeLogo: "",
    });
    setDetails(false);
    setisEditted(false);
  };

  const handleChange = (event) => {
    let targetName = event.target.name;
    let targetValue = event.target.value;

    if (targetName === "image" || targetName === "collegeLogo") {
      targetValue = `images/${event.target.files[0].name}`;
    }

    setStudent({
      ...student,
      [targetName]: targetValue,
    });
  };
  const deleteStudent = (id) => {
    const sortedStudents = students.filter((s) => s.id !== id);
    setStudents(sortedStudents);
  };

  const editStudent = (id) => {
    const filteredStudents = students.filter((s) => s.id !== id);
    const selectedStudent = students.find((s) => s.id === id);

    setStudents(filteredStudents);
    setStudent(selectedStudent);
    setisEditted(true);
  };

  return (
    <div>
      <StudentForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        isValidDetails={isValidDetails}
        student={student}
        isEditted={isEditted}
      ></StudentForm>
      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      ></StudentList>
    </div>
  );
}
