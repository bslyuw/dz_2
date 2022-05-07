import Card from "./Card";
import ExpensesItem from "./ExpensesItem";
const Expenses = (props) => {
  console.log("props", props);
  console.log(props.data);
  const { allExpenses } = props;
  console.log("allExpenses", allExpenses);
  return (
    <div>
      {allExpenses.map((expense) => (
        <ExpensesItem
          key={Math.random()}
          date={expense.newDate}
          title={expense.newTitle}
          price={expense.newAmount}
        />
      ))}
    </div>
  );
};
export default Expenses;