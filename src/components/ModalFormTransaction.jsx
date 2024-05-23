import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import '../styles/Switch.css';
import SwitchInOut from "./Switch";

const ModalFormTransaction = () => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        formDescription: ''        
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleChange = event => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData)
        setFormData({
            formDescription: ''
        })
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
                            <SwitchInOut inOut={true} />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="register-date"
                        >
                            <Form.Label>Data Cadastro</Form.Label>
                            <Form.Control
                                type="date"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formDescription"
                        >
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control
                                type="text"
                                name="formDescription"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="price"
                        >
                            <Form.Label>Valor</Form.Label>
                            <Form.Control
                                type="number"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="tag"
                        >
                            <Form.Label>Categoria</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Selecione uma categoria</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="account"
                        >
                            <Form.Label>Conta</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Selecione uma conta de destino</option>
                                <option value="1">Nubank</option>
                                <option value="2">C6 Débito</option>
                                <option value="3">C6 Crédito</option>
                                <option value="4">C6 Invest</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="status"
                        >
                            <Form.Label>status</Form.Label>
                            <Form.Check
                                name="status"
                                type="radio"
                                id="pending"
                                label="Pendente"
                                defaultChecked
                                />
                            <Form.Check
                                name="status"
                                type="radio"
                                id="paid"
                                label="Pago"
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