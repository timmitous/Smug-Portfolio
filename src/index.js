import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

// class App extends React.Component {
//     render() {
//       return (
//         <div>
//           <header>
//             <Link to="/">Adopt Me!</Link>
//           </header>
//           <Router>
//             <Results path="/" />
//             <Details path="/details/:id" />
//           </Router>
//         </div>
//     );
// }

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
