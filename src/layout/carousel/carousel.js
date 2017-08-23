import React from 'react';
import './carousel.css';

export default class Carousel extends React.Component {
    constructor(){
        super();
        this.state = {
            speed: 10,
        }
        this.animated = this.animated.bind(this);
    }

    pre = () => {
        this.animated(this.refs.carousel.offsetLeft + 400,this.state.speed);
    };

    animated = (next,speed) => {
        let pre = this.refs.carousel.offsetLeft;
        let timer = setInterval(() => {
            if((pre <= next && speed > 0) || (pre >= next && speed < 0)){
                pre += speed;
                this.refs.carousel.style.left = `${pre}px`;
            }else{
                this.refs.carousel.style.left = `${next}px`;
                clearInterval(timer);
            }
        },10);
    };

    componentDidMount(){
      setInterval(() => {
          if(this.refs.carousel.offsetLeft === 0){
              this.refs.carousel.style.left = `-1200px`;
          }else if(this.refs.carousel.offsetLeft === -1600){
              this.refs.carousel.style.left = `-400px`;
          }
      },1);
    };

    next = () => {
        this.animated(this.refs.carousel.offsetLeft - 400,-this.state.speed);
    };

    render(){
        return(
            <div className="container">
                <button onClick={this.pre.bind(this)}>&lt;</button>
                <div className="list" ref="carousel">
                    <div className="item" style={{background:'blue'}}>3</div>
                    <div className="item" style={{background:'red'}}>1</div>
                    <div className="item" style={{background:'yellow'}}>2</div>
                    <div className="item" style={{background:'blue'}}>3</div>
                    <div className="item" style={{background:'red'}}>1</div>
                </div>
                <button onClick={this.next.bind(this)}>&gt;</button>
            </div>
        );
    }
}