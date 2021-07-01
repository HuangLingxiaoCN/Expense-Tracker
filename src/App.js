import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 659.42,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Bicycle",
    amount: 60.0,
    date: new Date(2021, 5, 4),
  },
  {
    id: "e3",
    title: "Vehicle Inspection",
    amount: 190.0,
    date: new Date(2020, 4, 15),
  },
  {
    id: "e4",
    title: "Washing Machine",
    amount: 100.0,
    date: new Date(2019, 4, 20),
  },
];

function App() {
  const [expenseList, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenseList} />
    </div>
  );
}

export default App;