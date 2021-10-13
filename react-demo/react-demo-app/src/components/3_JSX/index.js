// Rendering multiple elements using JSX
ReactDOM.render(
    <ul>
      <li>Hot dogs</li>
      <li>Sushi</li>
      <li>Pizza</li>
      <li>Burgers</li>
    </ul>,
    document.getElementById("root")
  );
  
  // Using JSX
  let city = "Madrid";
  
  ReactDOM.render(<h1>Hello from {city}</h1>, document.getElementById("root"));
  
  // Using objects & attributes with JSX
  let person = {
    name: "Sanushi",
    age: 24,
  };
  
  ReactDOM.render(
    <div id="heading" className="cool-text">
      <p>{person.name}</p>
      <p>{person.age}</p>
    </div>,
    document.getElementById("root")
  );  