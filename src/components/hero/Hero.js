import React, { Component } from 'react';
import './Hero.css';
import background from '../../hooks_assets/hooks_hero.jpg';

class Hero extends Component {
    render(){
        return(
            <div className="hero" style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-overlay">
                    <h2 className="hero-text">Quality home construction serving King and Kitsap counties.</h2>
                    <i class="arrow down"></i>
                </div>
            </div>
        )
    }
}

export default Hero;