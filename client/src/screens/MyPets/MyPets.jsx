import { useState, useEffect } from "react";
import Pet from "../../components/Pet/Pet";
import Layout from "../../components/Shared/Layout/Layout";
import { getPets } from "../../services/pets";
import "./MyPets.css";

const MyPets = (props) => {
  const [allMyPets, setAllMyPets] = useState([]);

  useEffect(() => {
    const fetchMyPets = async () => {
      const pets = await getPets();
      console.log(pets);
      setAllMyPets(pets);
    };
    fetchMyPets();
  }, []);

  if (!allMyPets || !props.user) {
    return <div>Loading...Don't stop Retrieving, Don't stop feline</div>;
  }
  console.log(props.user._id);

  console.log(allMyPets[0]);

  const userPets = allMyPets.filter((pet) => props.user._id === pet.userId);

  return (
    <Layout user={props.user}>
      <div className="user-pets-container">
        <div className="user-pets-text">
          <div className="user-pets-heading"> My Fur-ever Friends </div>
        </div>
        {userPets.map((pet, index) => (
          <Pet
            _id={pet._id}
            name={pet.name}
            breed={pet.breed}
            imgURL={pet.imgURL}
            userId={pet.userId}
            key={index}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MyPets;
