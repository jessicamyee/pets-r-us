import "./Step3.css";

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  }
  return(
    <div className="form-group-3">
      <input
        className="form-control"
        id="imgURL"
        name="imgURL"
        type="text"
        placeholder="Enter imgURL"
        value={props.imgURL}
        onChange={props.handleChange}
      />
      
      <input
        className="form-control"
        id="type"
        name="type"
        textarea={500}
        placeholder="Enter Animal Type"
        value={props.type}
        onChange={props.handleChange}
      />
     <button className="submit-button">Submit</button>
    </div >
  );
}
export default Step3;