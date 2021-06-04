import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { GlobalProvider } from './context/GlobalState';
import { Header } from './components/Header';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
