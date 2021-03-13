import './Step2.css'


function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-group-2">
      <input
        className="create-price"
        id="price"
        name="price"
        type="text"
        placeholder="Enter Adoption Fee (USD)"
        value={props.price}
        onChange={props.handleChange}
        required
      />
      <input
        className="create-link"
        id="link"
        name="link"
        type="link"
        placeholder="Enter Adoption Link"
        value={props.link}
        onChange={props.handleChange}
        required
      />
      <textarea
        className="create-description"
        name="description"
        rows={5}
        placeholder="Enter Description (500 character limit)"
        value={props.description}
        onChange={props.handleChange}
        maxlength="500"
        required
      />
    </div>
  );
}

export default Step2;
