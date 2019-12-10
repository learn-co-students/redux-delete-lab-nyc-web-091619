import React, { Component } from 'react';

class Band extends Component {

  handleDelete = (id) => {
    this.props.deleteBand(id)
  }

  render() {
    return(
      <div>
      <li>{this.props.band.name}</li> <button onClick={() => this.handleDelete(this.props.band.id)}>X</button>
      </div>
    );
  }
};

export default Band;

