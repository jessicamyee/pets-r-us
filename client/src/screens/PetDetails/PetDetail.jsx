import React, { useState, useEffect } from "react";
import Layout from "../../components/Shared/Layout/Layout";
import { getPet, deletePet } from "../../services/pets";
import { useParams, Link, useHistory } from "react-router-dom";
import "./PetDetail.css";

const PetDetail = (props) => {
  const [pet, setPet] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const history = useHistory();

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

  const handleDelete = async () => {
    await deletePet(pet._id);
    history.push("/pets");
  };

  return (
    <Layout user={props.user} backgroundColor={"rgb(207, 250, 218)"}>
      <div className="pet-detail">
        <div className="detail-top">
          <img className="pet-detail-image" src={pet.imgURL} alt={pet.name} />
          <div className="detail">
            <div className="detail-name">
              {pet.name} <span className="paw-like">&#128062;</span>
            </div>
            <div className="detail-breed">Breed: {pet.breed}</div>
            <div className="detail-age">Age: {pet.age}</div>
            <div className="detail-gender">Gender: {pet.gender}</div>
            <div className="detail-price"> Adoption Fee: ${`${pet.price}`}</div>
            <a
              href={pet.link}
              rel="noreferrer"
              target="_blank"
              className="detail-link"
            >
              Click here to learn more about me
            </a>
            {props.user && pet.userId === props.user._id && (
              <>
                <div className="button-container">
                  <button className="edit-button">
                    <Link className="edit-link" to={`/pets/${pet._id}/edit`}>
                      Edit Details
                    </Link>
                  </button>
                  <button className="delete-button" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="detail-description">
          <span className="det-des-heading">Meet {pet.name} :</span>{" "}
          {pet.description}
        </div>
      </div>
    </Layout>
  );
};

export default PetDetail;
