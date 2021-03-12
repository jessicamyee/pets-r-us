import React from "react";
import "./Step1.css";

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group-1">
      {/* <label htmlFor="pet-name">Pet Name</label> */}
      <input
        className="form-control-a"
        id="name"
        name="name"
        type="text"
        placeholder="Enter Pet Name"
        value={props.name}
        onChange={props.handleChange}
      />
      {/* <label htmlFor="breed">Breed</label> */}
      <input
        id="breed"
        name="breed"
        type="text"
        placeholder="Enter Breed"
        value={props.breed}
        onChange={props.handleChange}
      />
      {/* <label htmlFor="age">Age</label> */}
      <input
        className="form-control-a"
        id="age"
        name="age"
        type="text"
        placeholder="Enter Age"
        value={props.age}
        onChange={props.handleChange}
      />
            {/* <label htmlFor="gender">Gender</label> */}
      <select name="gender" onChange={props.handleChange} id="dropdown">
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select>
      {/* <input
        className="form-control-a"
        id="gender"
        name="gender"
        type="text"
        placeholder="Enter Gender"
        value={props.gender}
        onChange={props.handleChange}
      /> */}

    </div>
    
  
  );
}
export default Step1;