import { Link } from "react-router-dom";
// import "./PetCard.css";

const PetCard = (props) => {
  return (
    <div className="pet-card">
      <Link className="card" to={`/pets/${props._id}`}>
        <div className="carousel">
          <img className="pet-card-pic"
            src={props.imgURL}
            alt={props.breed} />
          <div className="pet-name">{props.name}</div>
          <div className="pet-breed">{props.breed}</div>
        </div>
      </Link>
    </div>
  )
}

export default PetCard;
