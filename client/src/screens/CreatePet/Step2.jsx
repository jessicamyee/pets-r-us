function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-group-2">
      <input
        className="form-control"
        id="price"
        name="price"
        type="text"
        placeholder="Enter Adoption Fee (USD)"
        value={props.price}
        onChange={props.handleChange}
      />
      <input
        className="form-control"
        id="link"
        name="link"
        type="link"
        placeholder="Enter Link"
        value={props.link}
        onChange={props.handleChange}
      />
      <input
        className="form-control"
        id="description"
        name="description"
        type="text"
        placeholder="Enter Description"
        value={props.description}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Step2;
