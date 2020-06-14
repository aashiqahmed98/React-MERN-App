import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

// import { BrowserRouter as Router, Route} from "react-router-dom";

// components
import NavBar from "./components/navbar";
import CreateUser from "./components/create-user";
import CreateExercise from "./components/create-exercise";
import EditExercise from "./components/edit-exercise";
import ExerciseList from "./components/exercises-list";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      {/* Fragments. A common pattern in React is for a component to return multiple elements. 
      Fragments let you group a list of children without adding extra nodes to the DOM.  */}
      <Router>
        
        {/* !5px padding by default for "container" */}
        <div className="container">
          <NavBar />
          {/* You should use <Link> inside <Router> */}
          <Route path="/" exact component={ExerciseList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
