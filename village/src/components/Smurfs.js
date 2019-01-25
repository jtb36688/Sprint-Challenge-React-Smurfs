import React from 'react';

import Smurf from './Smurf';

const Smurfs = props => {

    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul className="SmurfsList">
          {props.smurfs.map(smurf => {
            return (
              <Smurf
                modifySmurf={props.modifySmurf}
                deleteSmurf={props.deleteSmurf}
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


Smurf.defaultProps = {
};

export default Smurfs;
