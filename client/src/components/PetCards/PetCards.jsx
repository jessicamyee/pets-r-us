
import { Component } from "react";
import PetCard from "../PetCard/PetCard";
import { getPets } from "../../services/pets";

class PetCards extends Component {
  constructor() {
    super();
    this.state = {
      pets: [],
    };
  }

  async componentDidMount() {
    const pets = await getPets();
    this.setState({ pets });
  }

  render() {
    const CARDS = this.state.pets
      .reverse()
      .map((pet, index) =>
        index < 6 ? (
          <PetCard
            _id={pet._id}
            name={pet.name}
            breed={pet.breed}
            imgURL={pet.imgURL}
            key={index}
          />
        ) : null
      );

    return (
      <div className="pet-cards">
        <div className="cards">{CARDS}</div>
      </div>
    );
  }
}

export default PetCards;