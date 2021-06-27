import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
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
      title: "Inspection",
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

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
