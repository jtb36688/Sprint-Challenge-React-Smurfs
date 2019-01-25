import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route, NavLink, Link } from "react-router-dom";

const apiurl = `http://localhost:3333/smurfs`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get(`${apiurl}`)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateAppState = () => {
    setTimeout(() => {
      axios
        .get(`${apiurl}`)
        .then(res => {
          this.setState({ smurfs: res.data });
        })
        .catch(err => {
          console.log(err);
        });
    }, 500);
  };

  deleteSmurf = id => {
    axios
    .delete(`${apiurl}/${id}/`)
    .then(res => {
      this.setState({
        smurfs: res.data
      });
    })
    .catch(err => console.log(err));
  }

  modifySmurf = id => {
    
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav className='NavBar'>
          <NavLink to='/'>Smurf Village</NavLink>
          <NavLink to='/AddNew'>Add Smurf(s)</NavLink>
        </nav>
        <Route
          exact
          path="/"
          render={props => (
            <div>
              <Smurfs {...props} deleteSmurf={this.deleteSmurf} modifySmurf={this.modifySmurf} smurfs={this.state.smurfs} />
              <Link to="/AddNew">Add New Smurf...</Link>
            </div>
          )}
        />
        <Route
          path="/AddNew"
          render={props => (
            <div>
              <SmurfForm {...props} updateAppState={this.updateAppState} />
              <Link to="/">Return To Smurf Village</Link>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
