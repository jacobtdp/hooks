import React, { Component } from 'react';
import './Services.css';

import Modal from '../modal/Quote-Modal';

class Services extends Component {

    render(){
        return(
            <div className="services">
                <div className="services-content">
                    <h1>Services: </h1>
                    <ul>
                        <li>Framing etc and more</li>
                        <li>Option two</li>
                        <li>Another option</li>
                    </ul>
                    <h3>*Quotes available for misc</h3>

                    <div className="quote"><p></p><Modal dataName={"this.state.data"}/></div>
                </div>
            </div>
        )
    }
}

export default Services;