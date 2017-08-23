import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import TicTacToe from './tic-tac-toe';
// import Carousel from './layout/carousel/carousel';
import Music from './layout/music/music';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jQuery';
import Swiper from 'src/libs/swiper/swiper-3.4.2.jquery.min';


ReactDOM.render(<Music/>, document.getElementById('root'));
registerServiceWorker();
