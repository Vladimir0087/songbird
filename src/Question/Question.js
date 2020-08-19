import React, { Component } from 'react';
import './Question.css';



export default class Question extends Component {
    constructor(props) {
        super(props)

        this.state = {
            a: 0,


        }



    }

    music = () => {

        document.querySelector('audio').pause();
    }


    render() {
        let mus = this.props.data[this.props.stat.i][this.props.stat.j].audio
        if (!this.props.stat.music) {
            document.querySelector('audio').pause();
        }
        return (
            <div className="question">

                <div className="bird">
                    <img className="bird-image" src={this.props.stat.picture} alt="bird"></img>
                </div>

                <div className="stars-player">
                    <div className="stars">{this.props.stat.head}</div>
                    <hr />
                    <div className="player">
                        <audio controls src={mus}></audio>

                    </div>

                </div>
            </div>
        )
    }
}
