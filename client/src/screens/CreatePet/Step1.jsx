import React from "react";
import "./Step1.css";

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group-1">
      <input
        className="create-name"
        id="name"
        name="name"
        type="text"
        placeholder="Enter Pet Name"
        value={props.name}
        onChange={props.handleChange}
        autoFocus
        required
      />
      <input
        className="create-breed"
        id="breed"
        name="breed"
        type="text"
        placeholder="Enter Breed"
        value={props.breed}
        onChange={props.handleChange}
        required
      />
      <input
        className="create-age"
        id="age"
        name="age"
        type="text"
        placeholder="Enter Age"
        value={props.age}
        onChange={props.handleChange}
        required
      />
      <div className="select-create-gender">
      <select
        required
        className="create-gender"
        name="gender"
        onChange={props.handleChange}
        id="dropdown"
      >
        <option value="" disable selected>
          Select Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
        </select>
        </div>
    </div>
  );
}
export default Step1;
