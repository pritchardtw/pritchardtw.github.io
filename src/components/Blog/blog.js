import React, { Component } from 'react';
import Highlight from 'react-highlight';
import BlogEntry from './blog_entry';

export default class Blog extends Component {
  render() {
    return(
      <div className="project">
        <BlogEntry name='async_patterns' title='I promise to promise to promise' date='Feb 8th 2018'></BlogEntry>
      </div>
    );
  }
}
