import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

class NavBar extends Component {
  state = {};
  render() {
    return (
      /*<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand active">
          ExcerTracker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Exercises
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">
                Create Exercise
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
*/
      // Using react-bootstrap,not normal bootstrap
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" exact>
          Exercise Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"> Exercises</Nav.Link>
            <Nav.Link href="/create">Create Exercise</Nav.Link>
            <Nav.Link href="/user">Create User</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
