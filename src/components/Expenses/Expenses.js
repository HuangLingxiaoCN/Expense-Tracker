import React, { useState } from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setYear] = useState('2021');

  const onChangeYearHandler = (year) => {
    setYear(year);
    console.log("Selected year ", year);
  };

  const expenses = props.expenses;

  return (
    <div>
      <Card className="expense-list">
        <ExpensesFilter selectedYear={filteredYear} onChangeYear={onChangeYearHandler} />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
