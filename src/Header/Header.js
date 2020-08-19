import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state= {
            a:0,
    
        };

        this.changename=this.changename.bind(this)
    }

    
    changename() {
        let arr=document.querySelectorAll('.kinds>li');
        for (let ar of arr) {
            ar.className=""
        };
        arr[this.props.stat.i].className="current";
    }

    componentDidUpdate() {
        this.changename();
    }

    render() {
        return (
            <div className="header-grid">
                <div className="grid-logo"></div>
                <div className="grid-score">
                    <span className="score">Score:   
                    <span>{this.props.stat.score}</span>
                    </span>
                </div>
                <div className="grid-kinds">
                    <ul className="kinds">
                        <li className="current">Разминочка</li>
                        <li>Воробьиные птицы</li>
                        <li>Лесные птицы</li>
                        <li>Певчие птицы</li>
                        <li>Хищные птицы</li>
                        <li onClick={this.changename}>Морские птицы </li>
                    </ul>
                </div> 
            </div>
        )
    }
}
