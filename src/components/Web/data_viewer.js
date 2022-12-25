import React, { Component } from 'react';
import Project from '../project';

export default class DataViewer extends Component {
  render() {
    const images = [
      '../../static/images/web/dataviewer1.png',
      '../../static/images/web/dataviewer2.png',
      '../../static/images/web/dataviewer3.png'
    ];

    return(
      <Project
        title="Data Viewer!"
        link=""
        description="I built a data viewer using React and Typescript. It has a filter feature to filter through
        the data sources, and a date range filter to view data within a  specific range. I am querying an API for data sources,
        then I query the api with the selected source and date range for the data. This app uses Chart.js to display the data."
        images={images} />
    );
  }
}
