import React, { Component } from 'react';
import './Bio.css'

import background from '../../assets/carousel4.jpg';

class Bio extends Component {
    render(){
        return(
            <div className="bio" style={{ backgroundImage: `url(${background})` }}>
                <div className="bio-overlay">
                    <div className="bio-frame">
                        { <img src={require('../../assets/carousel1.jpg').default} /> }
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla placerat mi eget mollis. Nullam et mauris dolor. Vivamus eleifend sem eu tortor aliquet gravida. Vivamus non placerat odio. Pellentesque sed laoreet tellus, ut tincidunt est. Nullam at condimentum nunc. Pellentesque ut interdum metus. Duis nec mauris turpis. Etiam eu orci ligula. Sed erat urna, convallis convallis nunc eu, accumsan volutpat justo. Aliquam eget nunc faucibus, fringilla mi at, hendrerit lorem.</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bio;