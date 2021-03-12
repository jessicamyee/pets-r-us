// import { Link } from "react-router-dom";
import "./Step3.css";

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  }
  return(
    <div className="form-group-3">
      {/* <label htmlFor="imgURL">imgURL</label> */}
      <input
        className="form-control"
        id="imgURL"
        name="imgURL"
        type="text"
        placeholder="Enter imgURL"
        value={props.imgURL}
        onChange={props.handleChange}
      />
      
      {/* <label htmlFor="type">type</label> */}
      <input
        className="form-control"
        id="type"
        name="type"
        textarea={500}
        placeholder="Enter Animal Type"
        value={props.type}
        onChange={props.handleChange}
      />
      {/* <Link to="./pets"> */}
     <button className="submit-button">Submit</button>
    {/* </Link> */}
    </div >
  );
}
export default Step3;