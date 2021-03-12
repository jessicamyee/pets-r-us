import React from "react";
import "./CreatePet.css";
import Layout from "../../components/Shared/Layout/Layout";
// import { Redirect } from "react-router-dom";
import Parent from "./Parent";

const CreatePet = (props) => {
  // const [pet, setPet] = useState({
  //   name: "",
  //   breed: "",
  //   age: "",
  //   price: "",
  //   link: "",
  //   description: "",
  //   imgURL: "",
  //   type: "",
  //   gender: "",
  // });

  // const [isCreated, setCreated] = useState(false);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setPet({
  //     ...pet,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const created = await createPet(pet);
  //   setCreated({ created });
  // };

  return (
    <Layout user={props.user}>
      <Parent/>
      {/* <div className="create-pet">
      <div className="create-form-header">Welcome! Witty Header Goes Here!</div>
      <div className="create-form-instructions">Add a Pet for Adoption</div>
      
      <form className="create-form" onSubmit={handleSubmit}>
        <label>Name: </label>

        <input
          className="input-name"
          placeholder="Name"
          value={pet.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <label>Adoption Fee: </label>
        <input
          className="input-price"
          placeholder="Adoption Fee (USD)"
          value={pet.price}
          name="price"
          required
          onChange={handleChange}
        />
        <label>Pet Description: </label>
        <textarea
          className="input-textarea-description"
          rows={5}
          placeholder="Description"
          value={pet.description}
          name="description"
          required
          onChange={handleChange}
        />
        <label>Image Link: </label>
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={pet.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        
        <label>Adoption Link: </label>
        <input
          className="input-adoption-link"
          placeholder="Adoption Link"
          value={pet.link}
          name="link"
          required
          onChange={handleChange}
        />
                <label>Gender: </label>
        <input
          className="input-gender"
          placeholder="Gender"
          value={pet.gender}
          name="gender"
          required
          onChange={handleChange}
        />
        <label>Age: </label>
        <input
          className="input-age"
          placeholder="Age (in human years)"
          value={pet.age}
          name="age"
          required
          onChange={handleChange}
        />
        <label>Breed: </label>

        <input
          className="input-breed"
          placeholder="Breed (All are welcome!)"
          value={pet.breed}
          name="breed"
          required
          onChange={handleChange}
        />
        <label>Animal Type: </label>

        <input
          className="animal-type"
          placeholder="Animal Type"
          value={pet.type}
          name="type"
          required
          onChange={handleChange}
        /> */}

         {/* <select className="input-type" value={props.value} onSelect={handleSelect}>
          <option className="classname" value="drop-down">Search by type</option>
          <option className="type-input" value="doggo">Doggo</option>
          <option className="type-input" value="kitty">Kitty</option>
          <option className="type-input" value="bunny">Bunny</option>
          
          </select> */}
        {/* <button type="submit" className="submit-button">
          Submit
        </button>
        </form> */}
        {/* </div> */}
     </Layout>
  );
};

export default CreatePet;
