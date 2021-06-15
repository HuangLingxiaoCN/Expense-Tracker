import ExpenseItem from "./components/ExpenseItem";

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

  return (
    <div className="App">
      <h1>Let's learn React!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
