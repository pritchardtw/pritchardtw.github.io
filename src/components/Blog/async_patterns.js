import React, { Component } from 'react';
import Highlight from 'react-highlight';

export default class Blog extends Component {
  render() {
    return(
      <div className="project">
        <Highlight className='javascript'>
          {"let x = y"}
        </Highlight>
      </div>
    );
  }
}
