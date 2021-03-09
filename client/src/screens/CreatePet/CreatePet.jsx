import React, { useState } from "react";
// import "./CreatePet.css";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createPet } from "../../services/pets";

const CreatePet = (props) => {
  const [pet, setPet] = useState({
    name: "",
    breed: "",
    age: "",
    price: "",
    link: "",
    description: "",
    imgURL: "",
    type: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPet({
      ...pet,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createPet(pet);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/pets`} />;
  }
  return (
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-name"
          placeholder="Name"
          value={pet.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-price"
          placeholder="Price"
          value={pet.price}
          name="price"
          required
          onChange={handleChange}
        />
        <textarea
          className="input-textarea-description"
          rows={10}
          placeholder="Description"
          value={pet.description}
          name="description"
          required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={pet.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <input
          className="input-adoption-link"
          placeholder="Adoption Link"
          value={pet.link}
          name="adoption-link"
          required
          onChange={handleChange}
        />
        <input
          className="input-age"
          placeholder="age"
          value={pet.age}
          name="age"
          required
          onChange={handleChange}
        />
        <input
          className="input-breed"
          placeholder="breed"
          value={pet.breed}
          name="breed"
          required
          onChange={handleChange}
        />
        <input
          className="input-type"
          placeholder="type"
          value={pet.type}
          name="type"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default CreatePet;
