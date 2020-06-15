import React, { Component } from "react";

import axios from "axios";

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

    console.log("the user", user);

    // Ensure the backend server part is running using "nodemon server"
    axios
      .post("http://localhost:5200/users/add", user)
      .then((res) => console.log(res.data));

    this.setState({
      username: "",
    });

    // console.log("Excerise log: ", user);
    // window.location = "/";
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
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUser;
