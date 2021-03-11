function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  }
  return(
    <div className="form-group-3">
      <label htmlFor="imgURL">imgURL</label>
      <input
        className="form-control"
        id="imgURL"
        name="imgURL"
        type="text"
        placeholder="Enter imgURL"
        value={props.imgURL}
        onChange={props.handleChange}
      />
      
      <label htmlFor="type">type</label>
      <input
        className="form-control"
        id="type"
        name="type"
        type="text"
        placeholder="Enter Animal Type"
        value={props.type}
        onChange={props.handleChange}
        />
     <button className="btn btn-success btn-block">Submit</button>
    </div>
  );
}
export default Step3;