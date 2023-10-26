import React from "react";
import { useState } from "react";
import "./alumni.css";
import axios from "axios";
const Studentdetails = () => {
  const data = sessionStorage.getItem("myData");
  const id = JSON.parse(data)._id;
  console.log(id);
  const [alumniDetails, setAlumniDetails] = useState({
    _id: id,
    name: "",
    pic: "",
    Company: "",
    Batch: "",
    Designation: "",
    AOE: "",
    ResidingIn: "",
    State_or_Country: "",
  });
  const [selectedOption, setSelectedOption] = useState("");
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    setAlumniDetails((prevDetails) => ({
      ...prevDetails,
      ResidingIn: event.target.value,
    }));
    console.log(selectedOption);
    setStateValue("");
    setCountryValue("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAlumniDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(alumniDetails);
    axios
      .post("http://localhost:3000/user/registeralumni", alumniDetails)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const renderSlide = () => {
    return (
      <div className="slide">
        <h2>Alumni Information</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={alumniDetails.name}
          onChange={handleInputChange}
        />
        <label htmlFor="Batch">Batch</label>
        <input
          type="Number"
          name="Batch"
          min="1946"
          max="2050"
          placeholder="YYYY"
          value={alumniDetails.Batch}
          onChange={handleInputChange}
        />
        <label htmlFor="Company">Company</label>
        <input
          type="Text"
          name="Company"
          placeholder="Company Name"
          value={alumniDetails.Company}
          onChange={handleInputChange}
        />
        <label htmlFor="Designation">Designation</label>
        <input
          type="Text"
          name="Designation"
          placeholder="Designation"
          value={alumniDetails.Designation}
          onChange={handleInputChange}
        />
        <label htmlFor="AOE">Area of Expertise</label>
        <input
          type="Text"
          name="AOE"
          placeholder="Area of Expertise"
          value={alumniDetails.AOE}
          onChange={handleInputChange}
        />
        <div className="settledIn">
          <label>
            <input
              type="radio"
              name="settle"
              value="india"
              checked={selectedOption === "india"}
              onChange={handleRadioChange}
            />
            Settled in India
          </label>
          <label>
            <input
              type="radio"
              name="settle"
              value="abroad"
              checked={selectedOption === "abroad"}
              onChange={handleRadioChange}
            />
            Settled Abroad
          </label>
        </div>
        {selectedOption === "india" && (
          <>
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="State_or_Country"
              name="State_or_Country"
              value={alumniDetails.State_or_Country}
              onChange={handleInputChange}
              placeholder="Enter state"
            />
          </>
        )}

        {selectedOption === "abroad" && (
          <>
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="State_or_Country"
              name="State_or_Country"
              value={alumniDetails.State_or_Country}
              onChange={handleInputChange}
              placeholder="Enter country"
            />
          </>
        )}

        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  };

  return <div className="alumni-form-container">{renderSlide()}</div>;
};

export default StudentDetails;
