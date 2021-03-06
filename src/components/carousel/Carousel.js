import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AutoplaySlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Carousel.css';

import imageOne from '../../assets/carousel1.jpg';
import imageTwo from '../../assets/carousel2.jpg';
import imageThree from '../../assets/carousel3.jpg';
import imageFour from '../../assets/carousel4.jpg';

class Gallery extends Component {
    render(){
        return(
            <div className="carousel">
                <div className="mobile-divider-line-top">
                    <div className="mobile-divider-carousel-top-black"></div>
                    <div className="mobile-divider-carousel-top-orangeR"></div>
                </div>

                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={6000}
                    media={[
                        {
                            source: imageOne,
                        },
                        {
                            source: imageTwo,
                        },
                        {
                            source: imageThree,
                        },
                        {
                            source: imageFour
                        }
                    ]}
                >
                </AutoplaySlider>
                <div className="carousel-description">
                    <h3>Lorem ipsum dolor sit amet, etc, etcetera. Lorem ipsum dolor sit amet and more, etcetera, and more.</h3>
                </div>

                <i class="carousel-arrow down"></i>

                <div className="mobile-divider-line-bottom">
                    <div className="mobile-divider-carousel-bottom-orangeL"></div>
                    <div className="mobile-divider-carousel-bottom-black"></div>
                </div>

            </div>
        )
    }
}

export default Gallery;