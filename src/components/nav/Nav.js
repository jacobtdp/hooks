import React, { Component } from 'react';
import './Nav.css'

import {Link} from 'react-scroll'
import Modal from '../modal/Nav-Modal';

class Nav extends Component {
    render(){

        return(
            <div className="nav">
                <div className="nav-content">

                    <Link to="hero" spy={true} smooth={true}>
                        <div className="logo">
                            <img src={require('../../hooks_assets/hooks_logo_whitesmoke.png').default} />
                        </div>
                    </Link>

                    <div className="options">
                        <Link to="bio" spy={true} smooth={true}>
                            <h3>About Us</h3>
                        </Link>
                        <Link to="gallery" spy={true} smooth={true}>
                            <h3>Gallery</h3>
                        </Link>

                        <Modal />

                    </div>
                </div>
                <div className="nav-shade"></div>
            </div>
        )
    }
}

export default Nav;