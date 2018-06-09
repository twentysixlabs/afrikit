// @flow
import React, { Component } from 'react';

export default class extends Component {
  nnenna: string = 'Hello Tina';
  render() {
    return (
      <div>
        <h2>Welcome to React components, {this.nnenna} </h2>
      </div>
    );
  }
}
