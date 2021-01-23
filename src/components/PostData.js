import React from "react";
import axios from "axios";

export default class PostData extends React.Component {
  state = {
    id: 0,
    name: ""
  };
  onChange = e => {
    this.setState({ name: e.target.value });
  };
  onDelete = e => {
    this.setState({ id: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const user = {
      name: this.state.name
    };
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, user)
      .then(res => console.log(res.data));
  };
  deleteData = e => {
    e.preventDefault();
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Person Name</label>
        <input type="text" name="name" className="inputBox" onChange={this.onChange} />
        <button>Add</button>
        <input type="number" name="id" className="inputBox" onChange={this.onDelete} />
        <button onClick={this.deleteData}>Delete</button>
      </form>
    );
  }
}
