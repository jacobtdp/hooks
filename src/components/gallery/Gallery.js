import React, { Component } from 'react';
import background from '../../assets/carousel4.jpg';

import './Gallery.css';

class Gallery extends Component {
    render(){
        return(
            <div className="gallery">
                <h1>Gallery</h1>
                <div className="gallery-image" style={{ backgroundImage: `url(${background})` }}></div>
                <div className="gallery-image" style={{ backgroundImage: `url(${background})` }}></div>
                <div className="gallery-image" style={{ backgroundImage: `url(${background})` }}></div>
                <div className="gallery-image" style={{ backgroundImage: `url(${background})` }}></div>
                <div className="gallery-image" style={{ backgroundImage: `url(${background})` }}></div>
                <div className="gallery-image" style={{ backgroundImage: `url(${background})` }}></div>
                <div className="gallery-image" style={{ backgroundImage: `url(${background})` }}></div>
                <div className="gallery-image" style={{ backgroundImage: `url(${background})` }}></div>
            </div>
        )
    }
}

export default Gallery;