import React, { Component } from 'react';
import HomeTab from './hometab';
import PictureViewer from './pictureviewer';



export default class Project extends Component {

  render() {

    const { title, description, images } = this.props;
    const style = (images.length > 1 ? "rowofthree" : '');

    return(
      <div className="project">
        <HomeTab />
        <h1>{title}</h1>
        {
          this.props.link ? <a href={this.props.link} target="_blank">Check it out here!</a> : <a></a>
        }
        <p>
          {description}
        </p>
        <br/>
        <PictureViewer images={images} pictureStyle={style}/>
      </div>
    );
  }
}
