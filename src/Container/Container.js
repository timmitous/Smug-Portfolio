import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Results from "../API/Results.js";

const allRoutes = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/facts">Facts</Link>
        </li>
      </ul>

      <Route exact path="/" component={Cards} />
      <Route path="/facts" component={Facts} />
    </div>
  </Router>
);

const Cards = () => <Results />;

const Facts = () => <div>hello</div>;
/*export default class Container extends Component {
  render() {
    return <Results />;
  }
}
*/

export default allRoutes;
