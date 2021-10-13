import { useState } from "react";

// useState hook
export default function UseStateDemo() {
  const result = useState();
  console.log(result); // Returns an array

  // Using array destructuring
  // Creates multiple state hooks
  const [counter, setCounter] = useState(0);
  const [checked, setChecked] = useState(false);

  // Creates a singe hook that holds an object
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const newCar = {
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  };

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <div>
      <h1>useState Demo</h1>
      <h2>Value of counter: {counter}</h2>
      <h2>My {car.brand}</h2>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={updateColor}>Change Car</button>
      <br />
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? "Checked" : "Not checked"}
      <br />
    </div>
  );
}