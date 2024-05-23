import './App.css';
import './styles/Modal.css'
import './styles/Switch.css';

import React from 'react';
import TransactionsTable from './components/TransactionsTable';
import ModalFormTransaction from './components/ModalFormTransaction';

const App = () => {

    return (
        <div className="App container--fluid">
            <ModalFormTransaction />
            <TransactionsTable />
        </div>
    );
}

export default App;
