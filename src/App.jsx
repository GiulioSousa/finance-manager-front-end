import './App.css';
import './styles/Modal.css'
import './styles/Switch.css';

import React, { useState, useEffect } from 'react';
import TransactionsTable from './components/TransactionsTable';
import ModalFormTransaction from './components/ModalFormTransaction';
import Loading from './components/Loading'

const App = () => {

    //INICIALIZAÇÃO ModalFormTransaction
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
            fetchData();
        } catch (error) {
            console.error('Error:', error);
        }
        setFormData({});
        handleCloseModalForm();
    }

    //INICIALIZAÇÃO TransactionsTable
    const [apiData, setApiData] = useState([]);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5500/transactions');
            if (!response.ok) {
                throw new Error('Erro ao buscar dados');
            }
            const jsonData = await response.json();
            setApiData(jsonData);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoad(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])


    if (load) {
        return <Loading />
    }

    if (error) {
        return <div>Erro: {{ error }}</div>
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
            <TransactionsTable
                apiData={apiData}
            />
        </div>
    );
}

export default App;
