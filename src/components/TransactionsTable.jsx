import React, { useState, useEffect } from 'react';
import TransactionItem from './TransactionItem';
import Loading from './Loading'

const TransactionsTable = () => {

    const [apiData, setApiData] = useState([]);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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

        fetchData();
    }, [])


    if (load) {
        return <Loading />
    }
    
    if (error) {
        return <div>Erro: {{error}}</div>
    }

    return (
        <div className='table-container card'>
            <table>
                <thead>
                    <tr>
                        <th>Data Cadastro</th>
                        <th>Transação</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Status</th>
                        <th>Conta</th>
                    </tr>
                </thead>
                <tbody>
                    {apiData.map(item => <TransactionItem key={item.id} item={item} />)}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionsTable;