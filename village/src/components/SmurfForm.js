import React, { Component } from 'react';
import axios from 'axios';
import "../App.css";

const apiurl = `http://localhost:3333/smurfs`

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  componentDidMount() {
    this.props.smurfupdating ?
    this.setState({
      name: this.props.smurfs.find(smurf => smurf.id === this.props.smurfupdating).name,
      age: this.props.smurfs.find(smurf => smurf.id === this.props.smurfupdating).age,
      height: this.props.smurfs.find(smurf => smurf.id === this.props.smurfupdating).height
    })
    :
    null
  }

  addSmurf = event => {
    event.preventDefault();
    axios
      .post(apiurl, this.state)
      .then(res => {
        this.setState({
          name: '',
          age: '',
          height: ''
        });
      })
      .catch(err => {
        console.log(err);
      });
      this.props.updateAppState()
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfFormDiv">
        <form className="SmurfForm" onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
