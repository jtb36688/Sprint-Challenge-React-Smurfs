import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentlyupdating: []
    }
  }


  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul className="SmurfsList">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                modifySmurf={this.props.modifySmurf}
                deleteSmurf={this.props.deleteSmurf}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
