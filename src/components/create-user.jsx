import React, { Component } from "react";

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
