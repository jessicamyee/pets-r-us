import Layout from "../../components/Shared/Layout/Layout";
import CarouselProvider from "../../components/Carousel/Carousel";
import { Link } from "react-router-dom";
import "./Home.css";
import BackgroundVideo from "../CreatePet/BackgroundVideo";

function Home(props) {
  return (
    <Layout user={props.user} backgroundColor={"#cfdbd5"}>
      <div className="home-container">
        <div>
          <BackgroundVideo />
        </div>
        <div className="home-body">
          <div className="carousel-layout">
            <div className="home-title">Featured Furry Friends</div>
            <div>
              <CarouselProvider className="home-carousel" />
            </div>
          </div>
          <div className="mission-section">
            <div className="mission-header">Our Mission:</div>
            <div className="mission-statement">Our
            mission is to increase public awareness of adoptable pets from the
            Northeast U.S. region. This serves as a one-stop-”adopt” platform
            for you to browse adoptable pets across different shelters and
            agencies. <br />
            </div>
            <div>
            <Link to="/pets" className="mission-link">
                Adopt a pet and save a life!
            </Link>
            </div>
            <div className="disclaimer">
              NOTE* Although we try our best to ensure the pets’ adoption information and status are updated, please contact the pet’s organization to ensure they’re still available and the information on Pets-R-Us is accurate.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
