import ExpenseDate from "./ExpenseDate";
import  "./ExpenseItem.css"

function ExpenseItem(props) {
    return (
        <div>
            <ExpenseDate date={props.date}/>
            <div>{props.title}</div>
            <div>{props.amount}</div>
        </div>
    );
  }
  
  export default ExpenseItem;
  