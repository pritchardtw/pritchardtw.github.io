import React, { Component } from 'react';
import Navitem from './navitem';
import ResumeNavitem from './resumenavitem';
import BlogNavitem from './blognavitem';

export default class Navbar extends Component {
  render() {
    return(
        <ul className="custom-nav">
          <Navitem name='Home'/>
          <Navitem name='About'/>
          <Navitem name='Projects'/>
          <Navitem name='Contact'/>
          <ResumeNavitem />
          <BlogNavitem />
        </ul>
    )
  }
}
