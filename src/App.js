import ExpenseItem from "./components/ExpenseItem";
import { useState } from "react";

function App() {
  const date = Date(2023, 5, 12);
  const [title, setTitle] = useState("Car Insurance");
  
  function click_handler() {
    setTitle("Updated Title");
    console.log("clicked");
  };
  
  return (
    <div className="App">
      <h1>Dummy </h1>
      <ExpenseItem title={title} amount="294" date={date}/>
      <button onClick={click_handler}>Submit</button>
    </div>
  );
}

export default App;
