import React, { Component } from "react";

// Want to install a npm package calle 'Date-picker'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateExercise extends Component {
  constructor(props) {
    super(props);

    /*
    This is required is dont use ()=>('arrow') function,you can better use .jsx format and use arrow function

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
*/
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  // At the time of every refresh/reload

  componentDidMount() {
    this.setState({
      users: ["test user1", "test user2"],
      username: "test user",
    });
  }

  //   e=>event
  onChangeUsername = (e) => {
    console.log(e);
    this.setState({
      username: e.target.value,
    });
  };
  onChangeDuration = (e) => {
    this.setState({
      duration: e.target.value,
    });
  };
  onChangeDate = (Date) => {
    this.setState({
      date: Date,
    });
  };
  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log("Excerise log: ", exercise);
    // window.location = "/";
  };
  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map((user) => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateExercise;
