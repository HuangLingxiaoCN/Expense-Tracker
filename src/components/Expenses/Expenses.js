import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setYear] = useState("2021");
  const expenses = props.expenses;

  const onChangeYearHandler = (year) => {
    setYear(year);
  };

  const filteredExpenses = expenses.filter(
    // eslint-disable-next-line eqeqeq
    (expenseItem) => expenseItem.date.getFullYear() == filteredYear
  );

  return (
    <div>
      <Card className="expense-list">
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeYear={onChangeYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;