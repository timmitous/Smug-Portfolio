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
import Facts from "../Content/Facts.js";
import Musics from "../Content/MusicPlayer/Music.js";

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
                  <NavLink to="/" activeClassName="active" tag={NLink}>
                    Cards
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={NLink} to="/Fact" activeClassName="active">
                    Facts
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={NLink} to="/Music" activeClassName="active">
                    Music
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route exact path="/" component={Cards} />
          <Route path="/fact" component={Fact} />
          <Route path="/music" component={Music} />
        </div>
      </Router>
    );
  }
}

const Cards = () => <Results />;

const Fact = () => <Facts />;

const Music = () => <Musics />;
