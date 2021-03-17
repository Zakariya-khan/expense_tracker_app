import React from 'react';

// Import CSS
import './App.css';

// Import Components
import { Header } from './Header';
import { Balance } from './Balance';
import { AccountSummary } from './AccountSummary';
import { TransactionHistory } from './TransactionHistory';
import { AddTransaction } from './AddTransaction';

// Import Provider
import { GlobalProvider } from './GlobalState';

function App() {
  return (
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
        </div>
      </GlobalProvider>
  );
}

export default App;