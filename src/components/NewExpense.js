import "./NewExpense.css";
import {useState} from "react";

const NewExpense = () => {
    const [title,setTitle] = useState("New Item");
    const [date,setDate] = useState("New Item");
    const [amount, setAmount] = useState("New Item");

    const titleHandler = (sobytie) => {
         setTitle (sobytie.target.value);

        console.log(sobytie.target.value)
    }
    const dateHandler = (sobytie) => {
        setDate(sobytie.target.value)
        console.log(sobytie.target.value)
    }
    const amountHandler = (sobytie) => {
        setAmount(sobytie.target.value)
        console.log(sobytie.target.value)
    }
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleHandler} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" onChange={dateHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" onChange={amountHandler} />
          </div>
          <div className="new-expense__actions">
            <button>Cancel</button>
            <button>Add new expense</button>
          </div>
        </div>
      </form>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <h4>{amount}</h4>
    </div>
  );
};

export default NewExpense;