import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import _ from 'lodash';

export default class PictureViewer extends Component {
  constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
  }

  renderPics() {
    return _.map(this.props.images, (image, index) => {
      return (
        <img
          key={index}
          className={`img-responsive clickable ${this.props.pictureStyle}`}
          id={index.toString()}
          src={image}
          onClick={(event) => {
            this.setState({ photoIndex: parseInt(event.target.id), isOpen: true })
          }}
        />
      );
    });
  }

  render() {

        const { images } = this.props;

        const {
            photoIndex,
            isOpen,
        } = this.state;

        return (
            <div>
                {this.renderPics()}

                {isOpen &&
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })}
                    />
                }
            </div>
        );
    }
}
