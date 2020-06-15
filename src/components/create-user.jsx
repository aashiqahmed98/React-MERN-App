import React, { Component } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }
  onChangeUsername = (e) => {
    // console.log(e);
    this.setState({
      username: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    // Ensure the backend server part is running using "nodemon server"
    axios
      .post("http://localhost:5200/users/add", user)
      .then((res) => console.log(res.data));

    console.log("The added user", user);
    this.setState({
      username: "",
    });
  };

  render() {
    return (
      <div>
        <h1>Create New User</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />{" "}
            <Link to="/">
              <input value="Go Back" className="btn btn-dark" />
              
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default CreateUser;
