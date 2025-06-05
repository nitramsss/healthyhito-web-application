import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "../css/MealForm.css"
import MealFormBody from './MealFormBody';


function MealForm() {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button onClick={handleShow} className="startGenerating-btn" >
        Start Generating
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Let's make a meal for you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <MealFormBody />

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} className='close-btn' variant='secondary'>
            Close
          </Button>
          <Button onClick={handleClose} className='generate-btn'>
            Generate Meal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MealForm;