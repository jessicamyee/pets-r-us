
import { useState, useEffect } from "react";
import "./AllPets.css";
import Pet from "../../components/Pet/Pet"
import Search from "../../components/Search/Search";
import Layout from "../../components/Shared/Layout/Layout";
import { getPets } from "../../services/pets";

const AllPets = (props) => {
  
  const [allPets, setAllPets] = useState([]);
  const [queriedPets, setQueriedPets] = useState([]);
  
  useEffect(() => {
    const fetchPets = async () => {
      const pets = await getPets();
      setAllPets(pets);
      setQueriedPets(pets);
    };
    fetchPets();
  }, []);

  const handleSearch = (event) => {
    const newQueriedPets = allPets.filter((pet) =>
      pet.type.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedPets(newQueriedPets);
  };

  const handleSubmit = (event) => event.preventDefault();

  const petsJSX = queriedPets.map((pet, index) => (
    <Pet
      _id={pet._id}
      name={pet.name}
      breed={pet.breed}
      imgURL={pet.imgURL}
      key={index}
    />
  ))

  return (
    <Layout user={props.user} backgroundColor={'#cfdbd5'}>
      <div className="all-pets-container-search">
        <Search
          className="search-bar"
          onSubmit={handleSubmit}
          onChange={handleSearch} />
        <div className="pets">
          {petsJSX}
        </div>
      </div>
    </Layout>
  )
}

export default AllPets