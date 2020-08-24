import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Question from './Question/Question';
import Information from './Information/Information';
import birdsData from './data';




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      i:0,
      j:this.randomInteger(0, 5),    
      score:0,
      music: true,
      head: "* * * * *",
      picture: "https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg",


    }
    this.score= this.score.bind(this);
    this.nextButton = this.nextButton.bind(this);
    this.changeheadname = this.changeheadname.bind(this);
    this.final= this.final.bind(this);
    this.addscore=0;
    this.consol=[];
  }

  randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  nextButton () {
    
    this.consol.push([this.state.i+1 + " вопрос : " + this.addscore+" баллов"]);
    console.log([this.state.i+1 + " вопрос : " + this.addscore+" баллов"]);
    if (this.state.i===5) {
      document.querySelector(".wrapp1").style.display = "";
      document.querySelector(".wrapp0").style.display = "none";
      if (this.state.score===30) {
        document.querySelector("button").innerHTML="ИГРА ЗАКОНЧЕНА";
        document.querySelector(".finalscore1").innerHTML="Поздравляем! ВЫ ЧЕМПИОН!";
      }
      console.log(this.consol);
      

    } else {
    this.setState(state=>({
      i: state.i + 1,
      j:this.randomInteger(0, 5),
      head: "* * * * *",
      music: true,
      picture: "https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg"
      }));
    }
  }

changeheadname() {
  this.setState(state=>({
    head: birdsData[this.state.i][this.state.j].name,
    picture: birdsData[this.state.i][this.state.j].image,
    music: false,
    }))
}

  score (scor) {
    this.setState(state=>({
      score: state.score - scor +5
      }))
      this.addscore= 5-scor
  }

componentDidMount () {
  document.querySelector(".wrapp1").style.display = "none";
}

  final () {
    window.location.reload();
    document.querySelector(".wrapp1").style.display = "none";
    

  }

 
  render() {
    
    return (
  
      <div className="wrapper">
        <Header stat={this.state}/>
        <div className="wrapp1">
        <div className="finalscore1">Поздравляем!</div>
        <div className="finalscore2">Вы прошли викторину и набрали <span className="finalscore">{this.state.score}</span> из <span className="finalscore">30</span> возможных баллов</div>
        <button onClick={this.final} className="finalscorebut">Попробовать еще раз?</button>
        </div>
        <div className="wrapp0">
        <Question data={birdsData} stat={this.state} />
        <Information data={birdsData} stat={this.state} nextButton={this.nextButton} score={this.score} changeheadname={this.changeheadname}/>
        </div>
      </div>
    );
  }
}

