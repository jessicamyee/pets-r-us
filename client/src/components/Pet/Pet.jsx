
import './Pet.css'
import { Link } from 'react-router-dom'

const Pet = (props) => {
  return (
    <>
      <Link to={`/pets/${props._id}`}>
        <div>
          <div className="all-name">{props.name}</div>
          <div className="all-price">${props.price}</div>
          <img className="all-imgURL"
            src={props.imgURL}
            alt={props.breed} />
          <div className="">Read More!</div>
        </div>    
      </Link>
    </>
  )
}

export default Pet;

