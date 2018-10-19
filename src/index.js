import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGift,
  faHandHoldingHeart,
  faRibbon,
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faQuoteLeft,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons';

import { fab } from '@fortawesome/free-brands-svg-icons';


import 'antd/dist/antd.css';
import './mystyles.scss';
import App from './App';

library.add(
  faGift,
  faHandHoldingHeart,
  faRibbon,
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faQuoteLeft,
  faQuoteRight,
  fab,
);


ReactDOM.render(<App />, document.getElementById('root'));
