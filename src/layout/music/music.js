import React from 'react';
import $ from 'jQuery'
import './music.css';
import Swiper from '../../libs/swiper/swiper-3.4.2.jquery.min';
// import Swipercss from '../../libs/swiper/swiper.min.css';

export default class Music extends React.Component {
    constructor(){
        super();
    }

    componentDidMount(){
        $(document).ready(function () {
            var swiper = new Swiper('.swiper-container');
     });
    };
    
    render(){
        return (
            <div className="container">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="post swiper-slider"></div>
                        <div className="lyrics swiper-slider">
                    </div>

                </div>

                </div>
                <div className="music">
                    <audio src=""></audio>
                </div>
            </div>
        );
    }
}