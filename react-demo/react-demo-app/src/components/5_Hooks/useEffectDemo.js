import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";


function Game(playerName) {
  const [start, setStart] = useState(false);
  const [winner, setWinner] = useState(null);

  // Render only once, on 1st render
  useEffect(() => {
    console.log("Welcome to my dice roll game!");
  }, []);

  // Render anytime when the state variable (start) gets updated
  useEffect(() => {
    console.log("Game started: " + start);
  }, [start]);

  // Render anytime when the state variable (winner) gets updated
  useEffect(() => {
    alert("Congratulations you won!");
    document.title = "Game Over";
  }, [winner]);

  return (
    <section>
      <p>Winner: {winner}</p>
      <button onClick={() => setStart(true)}>Start game</button>
      <button
        onClick={() =>
          setWinner((winner = Math.random(10) > 5 ? playerName : "No winner"))
        }
      >
        Roll dice
      </button>
    </section>
  );
}

function GithubUsers() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then(setUsers)
      .catch(console.error);
  }, []);

  if (users) {
    return (
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <button onClick={() => setUsers([])}>Clear</button>
      </div>
    );
  }

  return null;
}

ReactDOM.render(
  <React.StrictMode>
    <DemoApp playerName="Sanushi" />
    <GithubUsers />
  </React.StrictMode>,
  document.getElementById("root")
);
