import React from "react";
import "./details.css";
import StudentDetails from "../components/studentDetails";
import Faculty from "../components/Faculty";
import Alumnidetails from "../components/Alumnidetails";
const Details = () => {
  const { role } = JSON.parse(sessionStorage.getItem("myData"));
  return (
    <>
      {
        <div className="details-outer-container">
          {role == "student" ? (
            <StudentDetails />
          ) : role == "faculty" ? (
            <Faculty />
          ) : (
            <Alumnidetails />
          )}
        </div>
      }
    </>
  );
};

export default Details;
