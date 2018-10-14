import React from "react";
import "./Header.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  NavLink as NLink
} from "react-router-dom";
import Results from "../API/Results.js";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar expand="md">
            <NavbarBrand href="/">Cards of Latin</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={NLink} to="/">
                    Components
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={NLink} to="/Facts">
                    Facts
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route exact path="/" component={Cards} />
          <Route path="/facts" component={Facts} />
        </div>
      </Router>
    );
  }
}

const Cards = () => <Results />;

const Facts = () => (
  <div className="Container">
    <div>hello</div>
  </div>
);
