import React, { useState, useEffect } from "react";
import Layout from "../../components/Shared/Layout/Layout";
import { getPet, deletePet } from "../../services/pets";
import { useParams, Link } from "react-router-dom";
// import "./PetDetail.css";

const PetDetail = (props) => {
  const [pet, setPet] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchGoodBoy = async () => {
      const pet = await getPet(id);
      setPet(pet);
      setLoaded(true);
    };
    fetchGoodBoy();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...Don't Stop Retrieving, Hold on to that feline</h1>;
  }

  return (
    <Layout user={props.user}>
      <div className="pet-detail">
        <img className="pet-detail-image" src={pet.imgURL} alt={pet.name} />
        <div className="detail">
          <div className="detail-name">{pet.name}</div>
          <div className="detail-breed">Breed:{pet.breed}</div>
          <div className="detail-age">Age:{pet.age}</div>
          <div className="detail-price"> Adoption Fee:{`${pet.price}`}</div>
          <div className="detail-link">{pet.link}</div>
          <div className="button-container">
            <button className="edit-button">
              <Link className="edit-link" to={`/pets/${pet._id}/edit`}>
                Edit Details
              </Link>
            </button>
            <button
              className="delete-button"
              onClick={() => deletePet(pet._id)}
            >
              Delete Pet
            </button>
          </div>
        </div>
        <div className="detail-description">{pet.description}</div>
      </div>
    </Layout>
  );
};

export default PetDetail;
