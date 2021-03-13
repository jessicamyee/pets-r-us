import { useState, useEffect } from "react";
import Pet from "../../components/Pet/Pet";
import Layout from "../../components/Shared/Layout/Layout";
import { userPets } from "../../services/users";

const MyPets = (props) => {
  const [allMyPets, setAllMyPets] = useState([]);

  useEffect(() => {
    const fetchMyPets = async () => {
      const pets = await userPets(props.userId);
      setAllMyPets(pets);
    };
    fetchMyPets();
  }, []);

  const myPetsJSX = allMyPets.map((pet, index) => (
    <Pet
      _id={pet._id}
      name={pet.name}
      breed={pet.breed}
      imgURL={pet.imgURL}
      key={index}
    />
  ));

  console.log(myPetsJSX);

  return (
    <Layout user={props.user} backgroundColor={"#C9E4CA"}>
      <div className="user-pets-object">{myPetsJSX}</div>
    </Layout>
  );
};

export default MyPets;
