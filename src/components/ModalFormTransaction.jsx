import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import '../styles/Switch.css';
import { SwitchInOut } from "./SwitchInOut";

const ModalFormTransaction = () => {
    const [show, setShow] = useState(false);
    const [inOutTransaction, setInOutTransaction] = useState(true)
    const [type, setType] = useState('')
    const [formData, setFormData] = useState({})

    console.log(formData)

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setInOutTransaction(true)
        const newType = 'ENTRADA';
        setType(newType);
        setFormData({...formData, type: newType})
        setShow(true)
    };

    const handleChangeInOutTransaction = () => {
        setInOutTransaction(!inOutTransaction)
        const newType = !inOutTransaction ? 'ENTRADA' : 'SAÍDA'
        setType(newType);
        setFormData({...formData, type: newType})
    }

    const handleSubmit = () => {
        console.log(formData)
        setFormData({});
        handleClose();
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Nova Transação
            </Button>
            <Modal show={show} onHide={handleClose} data-bs-theme="dark" className="text-light">
                <Modal.Header closeButton>
                    <Modal.Title className="text-light">Nova Transação</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="formSwitch"
                        >
                            <SwitchInOut
                                inOutTransaction={inOutTransaction}
                                onChangeTypeTransaction={handleChangeInOutTransaction}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalFormTransaction;