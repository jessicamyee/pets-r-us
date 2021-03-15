import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import React from "react";
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Carousel.css'
import {Link} from "react-router-dom"

export default class Carousel extends React.Component {


  render() {
    return (
      <CarouselProvider
        className="our-carousel"
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={4}
      >

        <Slider>
          <Slide index={0}>
            <Link to="/pets/604bc417a4d94000043d28f6">
            <img
              className="carousel-image"
              src="https://i.imgur.com/4Hta9Pn.png"
              alt="animal-blue"
            />              
            </Link>
          </Slide>
          <Slide index={1}>
            <Link to="/pets/604bc417a4d94000043d28f5">
              <img
                className="carousel-image"
                src="https://i.imgur.com/3KSWiDB.png"
                alt="animal-ollie" />
            </Link>
          </Slide>
          <Slide index={2}>
            <Link to="/pets/604bc417a4d94000043d28f7">
              <img
                className="carousel-image"
                src="https://i.imgur.com/FllIf6K.png"
                alt="animal-hollis" />
            </Link>
          </Slide>
          <Slide index={3}>
            <Link to="/pets/604bc417a4d94000043d28f4">
              <img
                className="carousel-image"
                src="https://i.imgur.com/eiKG7Ui.png"
                alt="animal-odie" />
            </Link>
          </Slide>
          </Slider>
          
        <ButtonBack>&#171;</ButtonBack>
        <ButtonNext>&#187;</ButtonNext>
        {/* <DotGroup></DotGroup> */}

      </CarouselProvider>
    );
  }
}