import React, { Component } from 'react';
import ProjectLink from './projectlink';

const embeddedPoints = [
  "Intelli-Joe! An intelligent coffee maker",
  "Linear Light Source! Lighting the way for Computed Tomography",
  "RSP! A Really Small Processor"
];

const applicationPoints = [
  "Backgroundify! Want a new phone wallpaper? All the time?",
  "Developing Android Apps! What I did to learn Android Dev",
  "Happy Birthday! My friend is older than before"
];

const webPoints = [
  "React! This page is in react",
  "React & Redux! Apps with R&R",
  "Baywatch! Watching bays, no lifegaurds allowed"
];

export default class ProjectsSection extends Component {
  render() {
    return (
      <div className="content">
        <a id="ProjectsSection"/>
        <h1>Projects!</h1>
        <div className="row">
          <div className="col-sm-4">
            <ProjectLink
              name="Embedded"
              points={embeddedPoints}
            />
          </div>
          <div className="col-sm-4">
            <ProjectLink
              name="Application"
              points={applicationPoints}
            />
          </div>
          <div className="col-sm-4">
            <ProjectLink
              name="Web"
              points={webPoints}
            />
          </div>
        </div>
      </div>
    );
  }
}
