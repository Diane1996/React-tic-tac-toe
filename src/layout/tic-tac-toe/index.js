import React from 'react';
import Square from './square/square';
import './index.css';

export default class TicTacToe extends React.Component {
    constructor(){
        super();
        this.state = {
            value:'',
            isNextX:true,
            squares:Array(9).fill(null),
            nextStep:'X',
            currentIndex:-1,
            winner:''
        };
    }

    componentDidMount(){
        console.log(this.refs.undo);
    }

    handleClick = (index) => {
        let squares = this.state.squares;
        if(squares[index] === null) {
             squares[index] = this.state.isNextX ? 'X' : 'O';
            this.setState({
                value:this.state.isNextX ? 'X' : 'O',
                nextStep:this.state.isNextX ? 'O' : 'X',
                isNextX:!this.state.isNextX,
                squares:squares,
                currentIndex:index,
            });
            let winner = this.calculationWinner(this.state.squares);
            if(winner){
                alert(winner + '赢了！');
            }
            // this.setState({
            //     winner:winner,
            // });
        }
    };
    calculationWinner = (squares) => {
        const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        for(let i = 0;i<lines.length;i++){
            const [a,b,c] = lines[i];
            if(squares[a] && squares[b] === squares[a] && squares[c] === squares[a]){
                console.log(squares[a]);
                return squares[a];
            }
       }
        return ;
    };

    undo = () => {
        console.log(this.state.value);
        this.setState(() =>{
            this.state.squares.splice(this.state.currentIndex,1,null);
        });
        this.setState({
            value: this.state.isNextX ? 'X' : 'O',
            nextStep: this.state.isNextX ? 'O' : 'X',
            isNextX: !this.state.isNextX,
        });
    };

    render(){
        const arr = ['1','2','3','4','5','6','7','8','9'];
        let text = arr.map((item,index) => {
            return <li onClick={this.handleClick.bind(this,index)} key={index}><Square value={this.state.squares[index]}/></li>;
        });
        return (
            <div className="outer">
                <a href="" className="newGame">新游戏</a>
                <p className="undo" onClick={this.undo.bind(this)} ref="undo">我要耍赖！</p>
                <p>轮到{this.state.nextStep}落子</p>
                <ul>{text}</ul>
            </div>
        );
    }
}