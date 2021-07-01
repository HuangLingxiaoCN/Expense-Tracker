import React, { useState } from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setYear] = useState("2021");
  const expenses = props.expenses;

  const onChangeYearHandler = (year) => {
    setYear(year);
  };

  // eslint-disable-next-line eqeqeq
  const filteredExpenses = expenses.filter(expenseItem => expenseItem.date.getFullYear() == filteredYear);

  return (
    <div>
      <Card className="expense-list">
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeYear={onChangeYearHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
