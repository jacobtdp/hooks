import React, { Component } from 'react';
import './Nav.css'

class Nav extends Component {
    render(){
        return(
            <div className="nav">
                <div className="nav-content">
                    <div className="logo">
                        <img src={require('../../assets/logo5.png').default} />
                    </div>
                    <div className="options">
                        <h3>Gallery</h3>
                        <h3>Contact</h3>
                    </div>
                </div>
                <div className="nav-shade"></div>
            </div>
        )
    }
}

export default Nav;