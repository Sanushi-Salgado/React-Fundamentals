// Using components
function PrintMessage() {
  return <h1>Welcome to my react lessons</h1>;
}

// Rendering multiple elements inside components
function PrintHello() {
  return (
    <div>
      <p>Welcome to React!</p>
      <p>Let's build something cool</p>
    </div>
  );
}

// Using properties
function GetSum(props) {
  console.log(props);
  console.log(Object.keys(props));
  return (
    <div>
      <p>There are {Object.keys(props).length} properties in total</p>
      <p>
        {props.operation} is: {props.num1 + props.num2}
      </p>
    </div>
  );
}

// Nested components
function Parent() {
  return (
    <div>
      <Child name="Bob" />
      <Child name="Mike" />
      <Child name="Jackie" />
    </div>
  );
}

function Child(props) {
  return <h1>{props.name}</h1>;
}

{
  /* <App />
    <PrintMessage></PrintMessage>
    <PrintMessage />
    <PrintHello />
    <GetSum operation="Sum" num1={10} num2={5} />
    <GetProduct operation="Multiply" num1={9} num2={5} />
    <Parent /> */
}
