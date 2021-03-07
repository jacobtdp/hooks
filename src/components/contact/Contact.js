import React, { Component } from 'react';
import './Contact2.css'

class Contact extends Component {
    render(){
        return(
            <div className="contact">
                <div className="mobile-divider-contact-top">
                    <div className="mobile-divider-contact-bottom-orangeL"></div>
                    <div className="mobile-divider-contact-bottom-black"></div>
                    <div className="mobile-divider-contact-bottom-orangeR"></div>
                </div>
                <div className="contact-card">


                    <img src={require('../../hooks_assets/hooks_logo.png').default} />
                    <div className="phone">
                        <h3>Phone: 206-123-4567</h3>
                        <h5>Mon-Fri, 9:00am - 5:00pm</h5>
                    </div>
                    <h3>Email: matt@hookscon.com</h3>
                </div>

            </div>
        )
    }
}

export default Contact;