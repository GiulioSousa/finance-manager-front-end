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
    const [formData, setFormData] = useState({
        data_cad: '',
        type: '',
        description: '',
        price: '',
        category: '',
        status: true,
        account: ''
    })

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setInOutTransaction(true)
        const newType = 'ENTRADA';
        setType(newType);
        setFormData({ ...formData, type: newType })
        setShow(true)
    };

    const handleChangeInOutTransaction = () => {
        setInOutTransaction(!inOutTransaction)
        const newType = !inOutTransaction ? 'ENTRADA' : 'SAÍDA'
        setType(newType);
        setFormData({ ...formData, type: newType })
    }

    const handleChangeFormInput = event => {
        const { name, value } = event.target;
        console.log(name, value);
        setFormData({ ...formData, [name]: value })
    };

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
                        <Form.Group
                            className="mb-3"
                            controlId="data_cad"
                        >
                            <Form.Label>Data Cadastro</Form.Label>
                            <Form.Control
                                type="date"
                                name="data_cad"
                                onChange={handleChangeFormInput}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="description"
                        >
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChangeFormInput}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="price"
                        >
                            <Form.Label>Valor</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                onChange={handleChangeFormInput}

                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="category"
                        >
                            <Form.Label>Categoria</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                name="category"
                                onChange={handleChangeFormInput}>
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
                            <Form.Select
                                aria-label="Default select example"
                                name="account"
                                onChange={handleChangeFormInput}>
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
                                onChange={handleChangeFormInput}
                            />
                            <Form.Check
                                name="status"
                                type="radio"
                                id="paid"
                                label="Pago"
                                onChange={handleChangeFormInput}
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