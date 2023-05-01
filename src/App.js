import Expenses from "../src/Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";

function App() {
  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses />
    </div>
  );
}

export default App;
