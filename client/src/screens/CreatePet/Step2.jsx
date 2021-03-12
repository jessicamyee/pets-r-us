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
        required
      />
      <input
        className="form-control"
        id="link"
        name="link"
        type="link"
        placeholder="Enter Link"
        value={props.link}
        onChange={props.handleChange}
        required
      />
      <textarea
        className="form-control"
        name="description"
        rows={10}
        placeholder="Enter Description"
        value={props.description}
        onChange={props.handleChange}
        required
      />
    </div>
  );
}

export default Step2;
