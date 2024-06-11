import TransactionItem from './TransactionItem';

const TransactionsTable = ({ apiData }) => {

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