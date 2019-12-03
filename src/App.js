import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FizzForm from "./components/FizzForm";
import FizzList from "./components/FizzList";
import Fizz from "./components/Fizz";
import Buzz from "./components/Buzz";
import Number from "./components/Number";

function App() {
  // set number and setNumber functions
  const [number, setNumber] = useState(0);

  //  const createNumber = number => {
  //    return <li>{number}</li>;
  //  };

  const showNumber = number => {
    for (let i = 0; i < number; i++) {
      number = <li>{i}</li>;
    }
  };
  /* map
 // const showNumber = number => {
  setNumber(number.map(createNumber));*/
}
// ToDo - Fizzbuzz logic
// useState variables
// map output
// input
return (
  <div className="App">
    <FizzForm onChange={e => setNumber(e.target.value)} />
    <button onClick={e => showNumber(e.target.value)}>Fizz!</button>
    <Fizz />
    <Buzz />
    <Number />
  </div>
);

export default App;
