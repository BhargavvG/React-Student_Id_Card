import React, { Component } from "react";
import StudentIDCard from "./StudentIdCard";

export default class StudentIdCardsList extends Component {
  render() {
    const { students, deleteStudent, editStudent } = this.props;
    return (
      <div className="container my-5">
        <div className="row">
          {students.map((s) => {
            const student = {
              image: s.image,
              id: s.id,
              firstName: s.firstName,
              lastName: s.lastName,
              dob: s.dob,
              gender: s.gender,
            };

            const college = {
              collegeLogo: s.collegeLogo,
              collegeName: s.collegeName,
              collegeAddress: s.collegeAddress,
              collegeCountry: s.collegeCountry,
            };

            return (
              <StudentIDCard
                key={s.id}
                student={student}
                college={college}
                deleteStudent={deleteStudent}
                editStudent={editStudent}
              ></StudentIDCard>
            );
          })}
        </div>
      </div>
    );
  }
}
