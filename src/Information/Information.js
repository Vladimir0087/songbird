import React, { Component } from 'react';
import './Information.css';

export default class Information extends Component {

    constructor(props) {
        super(props)

        this.state = {
            num: 0,
            rightanswer: false,


        };

        this.ClickBut = this.ClickBut.bind(this);
        this.nextBut = this.nextBut.bind(this);
        this.wrongscore = 0;


    }



    ClickBut(e) {
        if (!e.target.closest("li")) {
            return
        }

        document.querySelector(".view0").style.display = "none";
        document.querySelector(".view1").style.display = "block";
        let a = e.target.id;
        if (this.props.data[this.props.stat.i][this.props.stat.j].name === e.target.innerHTML) {
            e.target.className = "li-button-click-true";

            if (!this.state.rightanswer) {
                let audio = new Audio("https://birds-quiz.netlify.app/static/media/win.a1e9e8b6.mp3");
                audio.play();
            };


            if (!this.state.rightanswer) {
                this.props.score(this.wrongscore);
            };

            this.setState(state => ({
                rightanswer: true,
            }));
            this.wrongscore = 0;

            this.props.changeheadname();

        } else if (!this.state.rightanswer) {
            e.target.className = "li-button-click-false";
            if (this.wrongscore < 5) {
                this.wrongscore = this.wrongscore + 1;
            }

            let audio = new Audio("https://birds-quiz.netlify.app/static/media/error.165166d5.mp3");
            audio.play()

        };

        this.setState(state => ({
            num: a
        }));






    }

    nextBut() {
        if (this.props.stat.i === 5) {
            this.props.nextButton()
        }
        if (this.props.stat.i < 5 && this.state.rightanswer) {
            this.props.nextButton();
            let buttons = document.querySelectorAll('li button');
            for (let elem of buttons) {
                elem.className = "";
            };

            this.setState(state => ({
                rightanswer: false
            }));

            document.querySelector(".view0").style.display = "";
            document.querySelector(".view1").style.display = "none";
        }

    }

    render() {
        let ur = this.props.data[this.props.stat.i];
        let but = "button";
        if (this.state.rightanswer) {
            but += " right";
        };


        return (
            <div>
                <div className="logo2">
                    <ul className="ul" onClick={this.ClickBut}>
                        <li ><button id="0">{ur[0].name}</button></li>
                        <li ><button id="1">{ur[1].name}</button></li>
                        <li ><button id="2">{ur[2].name}</button></li>
                        <li ><button id="3">{ur[3].name}</button></li>
                        <li ><button id="4">{ur[4].name}</button></li>
                        <li ><button id="5">{ur[5].name}</button></li>
                    </ul>
                    <div className="answer">
                        <div className="view0">Послушайте плеер.<br /> Выберите птицу из списка </div>
                        <div className="view1">
                            <div className="bird-image-answer">
                                <img className="bird-image" src={ur[this.state.num].image} alt="bird"></img>
                            </div>
                            <div className="text">{ur[this.state.num].name}</div>
                            <div className="text">{ur[this.state.num].species}</div>
                            <audio controls src={ur[this.state.num].audio}></audio>
                            <div className="text">{ur[this.state.num].description}</div>
                        </div>
                    </div>

                </div>
                <button className={but} onClick={this.nextBut}>Next level</button>
            </div>
        )
    }
}
