import Modal from "react-bootstrap/Modal";

import "../css/MealForm.css";
import MealFormBody from "./MealFormBody";


function GenerateForm() {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Let's make a meal for you!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <MealFormBody />
            </Modal.Body>
        </>
    );
}

export default GenerateForm;
