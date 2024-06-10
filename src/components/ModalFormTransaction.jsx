import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import '../styles/Switch.css';
import { SwitchInOut } from "./SwitchInOut";

const ModalFormTransaction = ({
    onShowModalForm,
    onHandleShowModalForm,
    onHandleCloseModalForm,
    typeTransaction,
    onChangeTypeTransaction,
    onHandleChangeFormInput,
    formData,
    categorys,
    accounts,
    onSubmitModalForm
}) => {

    return (
        <>
            <Button variant="primary" onClick={onHandleShowModalForm}>
                Nova Transação
            </Button>
            <Modal show={onShowModalForm} onHide={onHandleCloseModalForm} data-bs-theme="dark" className="text-light">
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
                                typeTransaction={typeTransaction}
                                onChangeTypeTransaction={onChangeTypeTransaction}
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
                                onChange={onHandleChangeFormInput}
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
                                onChange={onHandleChangeFormInput}
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
                                onChange={onHandleChangeFormInput}
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
                                onChange={onHandleChangeFormInput}>
                                <option>Selecione uma categoria</option>
                                {categorys.map((category, i) => <option key={i} value={category}>{category}</option>)}
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
                                onChange={onHandleChangeFormInput}>
                                <option>Selecione uma conta de destino</option>
                                {accounts.map((account, i) => <option key={i} value={account}>{account}</option>)}
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
                                value="PENDENTE"
                                defaultChecked
                                onChange={onHandleChangeFormInput}
                            />
                            <Form.Check
                                name="status"
                                type="radio"
                                id="paid"
                                label="Pago"
                                value="PAGO"
                                onChange={onHandleChangeFormInput}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={onHandleCloseModalForm}
                    >
                        Close
                    </Button>
                    <Button
                        type="submit"
                        onClick={onSubmitModalForm}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalFormTransaction;