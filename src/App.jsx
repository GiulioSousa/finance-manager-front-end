import './App.css';
import './styles/Modal.css'
import './styles/Switch.css';

import React, { useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import ModalFormTransaction from './components/ModalFormTransaction';

const App = () => {

    const [showModalForm, setShowModalForm] = useState(false);
    const [typeTransaction, setTypeTransaction] = useState(true)
    const [type, setType] = useState('')
    const [formData, setFormData] = useState({
        data_cad: '',
        type: '',
        description: '',
        price: '',
        category: '',
        status: 'PENDENTE',
        account: ''
    })

    const categorys = ['ALIMENTAÇÃO', 'TRANSPORTE', 'EMPRÉSTIMO', 'OUTROS'];
    const accounts = ['ESPÉCIE', 'NUBANK', 'C6 DÉBITO', 'C6 INVEST']

    const handleShowModalForm = () => {
        setTypeTransaction(true)
        const newType = 'ENTRADA';
        setType(newType);
        setFormData({ ...formData, type: newType })
        setShowModalForm(true)
    };

    const handleCloseModalForm = () => setShowModalForm(false);

    const handleChangeTypeTransaction = () => {
        setTypeTransaction(!typeTransaction)
        const newType = !typeTransaction ? 'ENTRADA' : 'SAÍDA'
        setType(newType);
        setFormData({ ...formData, type: newType })
    }

    const handleChangeFormInput = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    };

    const handleSubmitModalForm = async () => {

        try {
            const response = await fetch('http://localhost:5500/create-transaction', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Sem resposta da rede');
            }

            const result = await response.json();
            console.log('Sucesso:', result);
        } catch (error) {
            console.error('Error:', error);
        }
        setFormData({});
        handleCloseModalForm();
    }

    return (
        <div className="App container--fluid">
            <ModalFormTransaction
                onShowModalForm={showModalForm}
                onHandleShowModalForm={handleShowModalForm}
                onHandleCloseModalForm={handleCloseModalForm}
                typeTransaction={typeTransaction}
                onChangeTypeTransaction={handleChangeTypeTransaction}
                onHandleChangeFormInput={handleChangeFormInput}
                formData={formData}
                categorys={categorys}
                accounts={accounts}
                onSubmitModalForm={handleSubmitModalForm}
            />
            <TransactionsTable />
        </div>
    );
}

export default App;
