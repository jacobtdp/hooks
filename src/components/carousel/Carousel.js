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
            </div>
        )
    }
}

export default Gallery;