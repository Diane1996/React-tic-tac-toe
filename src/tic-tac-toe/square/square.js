import React from 'react';
import './square.css';

export default class Square extends React.Component {
    render(){
        return(
        <a href="#">{this.props.value}</a>
        );
    }
}