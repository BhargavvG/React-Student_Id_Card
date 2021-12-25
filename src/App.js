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

  const studentData = [
    {
      id: 170890107030,
      firstName: "Rushil",
      lastName: "Kapoor",
      dob: "2021-12-23",
      gender: "male",
      image:
        "https://image.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg",
      collegeName: "GTU",
      collegeAddress: "Ahmedabad,Gujrat",
      collegeCountry: "India",
      collegeLogo:
        "https://cracku.in/latest-govt-jobs/wp-content/uploads/2021/06/GTU-Logo.png",
    },
    {
      id: 170890107013,
      firstName: "John",
      lastName: "Doe",
      dob: "2021-10-22",
      gender: "male",
      image: "images/student1.jpg",
      collegeName: "GTU",
      collegeAddress: "Rajkot",
      collegeCountry: "india",
      collegeLogo: "images/collegeLogo.jpg",
    },
  ];
  const [students, setStudents] = useState(studentData);
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
  }, [student]);

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
