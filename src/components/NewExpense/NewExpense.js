import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  // Create userClick state to toggle addExpense button and expense form
  const [userClick, changeUserClick] = useState(false);

  const onSaveExpenseDataHandler = (inputExpenseData) => {
    const expenseData = {
      ...inputExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    changeUserClick(!userClick);
  };

  const onAddExpenseHandler = () => {
    changeUserClick(!userClick);
  };

  return (
    <div className="new-expense">
      {!userClick && (
        <button type="submit" onClick={onAddExpenseHandler}>
          Add Expense
        </button>
      )}
      {userClick && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          toggleAddExpense={onAddExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;