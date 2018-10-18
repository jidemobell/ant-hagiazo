import React, { Component } from 'react';

import BackgroundSlideshow from 'react-background-slideshow';

import image1 from '../../images/1280/bible-1149924_1280.jpg';
import image2 from '../../images/1280/book-1210030_1280.jpg';
import image3 from '../../images/1280/cross-918459_1280.jpg';

export default class Slideshow extends Component {
  render() {
    return (
      <div>
        <BackgroundSlideshow images={ [image1, image2, image3] } />
      </div>
    );
  }
}

