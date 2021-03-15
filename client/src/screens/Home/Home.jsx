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
        <div className="home-title">
          Featured Furry Friends
          <div>
            <CarouselProvider className="home-carousel" />
          </div>
          <div className="mission">
            ~1.5 million shelter animals are euthanized every year (source). Our
            mission is to increase public awareness of adoptable pets from the
            Northeast U.S. region. This serves as a one-stop-”adopt” platform
            for you to browse adoptable pets across different shelters and
            agencies. <br />
            <Link to="/pets" className="mission-link">
              Adopt a pet and save a life!
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
