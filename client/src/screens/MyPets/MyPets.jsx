import { useState, useEffect } from "react";
import Pet from "../../components/Pet/Pet";
import Layout from "../../components/Shared/Layout/Layout";
import { getPets } from "../../services/pets";

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
  const userPets = allMyPets.filter((pet) => props.user._id === pet.userId);

  return (
    <Layout user={props.user} backgroundColor={"#C9E4CA"}>
      <div className="user-pets-object">
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
