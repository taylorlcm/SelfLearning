import React, { Component } from 'react';

export default class EditExercise extends Component {
  componentDidMount() {
    console.log("EditExercise...", this.props);
  }

  render() {
    return (
      <div>
        <p>You are on the Edit Exercise component!</p>
      </div>
    )
  }
}
