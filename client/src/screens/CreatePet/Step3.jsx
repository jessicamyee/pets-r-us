import "./Step3.css";

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div className="form-group-3">
      <input
        className="create-image-address"
        id="imgURL"
        name="imgURL"
        type="text"
        placeholder="Enter Image Address"
        value={props.imgURL}
        onChange={props.handleChange}
        required
      />

      <select className="create-animal-type" required name="type" onChange={props.handleChange} id="dropdown2">
        <option selected={props.type ===""} value="" disable selected>Select Animal Type</option>
        <option selected={props.type ==="dog"} value="dog">Doggo</option>
        <option selected={props.type ==="cat"} value="cat">Kitty</option>
        <option selected={props.type ==="rabbit"} value="rabbit">Bunny</option>  
      </select>
    </div>
  );
}
export default Step3;
