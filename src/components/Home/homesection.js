import React, { Component } from 'react';
import Navbar from './navbar';
import Banner from './banner';

export default class HomeSection extends Component {
  render() {
    return (
      <div className="container2">
        <a id="HomeSection"/>
        <Banner />
        <Navbar />
      </div>
    );
  }
}
