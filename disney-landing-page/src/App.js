import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  //main app
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Landing />
            <Header />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
