import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

import './App.css';

const DUMMY_EXPENSES = [
    {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date('August 14, 2020')},
    {id: 'e2', title: 'New Tv', amount: 799.49, date: new Date('March 12, 2021')},
    {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date('March 28, 2021')},
    {id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date('June 12, 2021')}
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
       setExpenses((prevExpenses) => {
           return [expense, ...prevExpenses];
       });
  };

  return (
    <div className="App">
      <h2>Let's get Started</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
