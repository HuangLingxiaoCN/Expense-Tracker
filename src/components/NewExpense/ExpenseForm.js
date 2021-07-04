import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputTitle, setTitle] = useState("");
  const [inputAmount, setAmount] = useState("");
  const [inputDate, setDate] = useState("");
  // Using just one state
  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: ''
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, amount: event.target.value};
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, date: event.target.value};
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: Number(inputAmount),
      date: new Date(inputDate),
    };

    props.onSaveExpenseData(expenseData);
    // Clear user input
    setTitle("");
    setAmount("");
    setDate("");
  };

  const addExpenseToggler = () => {
    props.toggleAddExpense();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={addExpenseToggler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
