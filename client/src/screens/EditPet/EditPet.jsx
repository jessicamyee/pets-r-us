import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/Shared/Layout/Layout";
import { getPet, updatePet } from "../../services/pets";
import "./EditPet.css";

const EditPet = (props) => {
  const [pet, setPet] = useState({
    name: "",
    breed: "",
    age: "",
    price: "",
    link: "",
    imgURL: "",
    description: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchGoodBoy = async () => {
      const pet = await getPet(id);
      setPet(pet);
    };
    fetchGoodBoy();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPet({
      ...pet,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updatePet(id, pet);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/pets/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="pet-edit">
        <div className="edit-image-container">
          <img className="edit-product-image" src={pet.imgURL} alt={pet.name} />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={pet.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="edit-top">
            <input
              className="input-name"
              placeholder="Pet Name"
              value={pet.name}
              name="name"
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className="input-breed"
              placeholder="Breed"
              value={pet.breed}
              name="breed"
              required
              onChange={handleChange}
            />
            <input
              className="input-age"
              placeholder="Age"
              value={pet.age}
              name="age"
              required
              onChange={handleChange}
            />
            <input
              className="input-price"
              placeholder="Adoption Fee"
              value={pet.price}
              name="price"
              required
              onChange={handleChange}
            />
            <input
              className="input-link"
              placeholder="Adoption Link"
              value={pet.link}
              name="link"
              required
              onChange={handleChange}
            />
          </div>
          <textarea
            className="textarea-description"
            rows={10}
            cols={70}
            placeholder="Pet Description"
            value={pet.description}
            name="description"
            required
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save Changes
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default EditPet;
