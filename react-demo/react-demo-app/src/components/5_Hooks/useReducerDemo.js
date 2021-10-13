// useReducer hook
function DemoApp() {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );
  return <h1 onClick={() => setNumber(2)}>{number}</h1>;
}

// useReducer hook
function NewCheckbox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "Checked" : "Not checked"}
    </>
  );
}
