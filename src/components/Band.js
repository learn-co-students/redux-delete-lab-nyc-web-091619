import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        <h1>{this.props.band.name}</h1>
        <button onClick={()=> this.props.deleteBand(this.props.band.id)}></button>
      </li>
    );
  }
};

export default Band;
