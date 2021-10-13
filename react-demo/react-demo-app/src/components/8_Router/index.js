import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewsFeed from "../7_Handling_APIs";
import HooksDemo from "../5_Hooks";
import Home from "../App";
import StyledComponentsDemo from "../6_Styled_Components";

export default function MyApp() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/hooks">React Hooks</Link>
      </div>
      <div>
        <Link to="/api_handling">Handling APIs</Link>
      </div>
      <div>
        <Link to="/styled_components">Styled Components</Link>
      </div>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/hooks">
          <HooksDemo />
        </Route>
        <Route path="/api_handling">
          <NewsFeed />
        </Route>
        <Route path="/styled_components">
          <StyledComponentsDemo />
        </Route>
      </Switch>
    </Router>
  );
}
