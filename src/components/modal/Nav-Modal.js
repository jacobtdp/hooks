import React, { useState } from "react";
import "./Modal.css";
import background from '../../assets/hero.jpg';

import Modal from "react-modal";
Modal.setAppElement("#root");


export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">

      <div className="options"><a><h3 onClick={toggleModal}>Contact</h3></a></div>

      <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="My dialog">
        <div className="modal-content-container">

            
            <div className="modal-image" style={{ backgroundImage: `url(${background})` }}>
                <div className="modal-image-overlay"><h2>See what <span id="hooks">Hooks Construction</span> can do for you</h2></div>
            </div>

            <div className="modal-info">
                <h3 className="modal-title">Contact Us:</h3>
                <div className="phone">
                    <h3>Phone: 206-123-4567</h3>
                    <h5>Mon-Fri, 9:00am - 5:00pm</h5>
                    <h3 className="email">Email: < a href="mailto:matt@hookscon.com">matt@hookscon.com</a></h3>
                </div>
            </div>

        </div>
      </Modal>
    </div>
  );
}