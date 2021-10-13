import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  // Access the global states
  // Extract the relevant states from the global state
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>Redux Demo</h1>

      <h3> Counter: {counter} </h3>
      {/* Dispatch actions to the reducer */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <p>'User Logged in'</p> : <p>'Please sign in'</p>}
    </div>
  );
}

export default App;
