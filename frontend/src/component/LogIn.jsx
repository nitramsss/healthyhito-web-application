import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LogInBody from "./LogInBody";

import "../css/LogIn.css"


function LogIn() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                variant="primary"
                onClick={handleShow}
                className="logIn-btn"
            >
                Log In
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="login-title">
                        <img
                            src="../src/assets/fitsenpai-logo.png"
                            alt="Hello"
                            className="logo-img"
                        />
                        Log In
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LogInBody />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className="login-btn" onClick={handleClose}>
                        Log In
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LogIn;
