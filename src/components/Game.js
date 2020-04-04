import React from "react";
import Timer from "./Timer";
import DisplayQuestion from "./DisplayQuestion";

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.timerRef = React.createRef();
        this.state = {
            score: 0,
            questionNumber: 1,
            isTimerOn: true,
        }
    }

    turnOffTimer = () => {
        this.setState({isTimerOn: false});
    };

    processCorrectAnswer = () => {
        this.setState(
            {
                score: this.state.score + 1,
                questionNumber: this.state.questionNumber + 1
            });
        this.timerRef.current.resetTimer();
    };


    render() {


        return <div>
            <div className="game-header">
                <div id="timer-score">
                    {this.state.isTimerOn === true ?
                        <Timer turnOffTimer={this.turnOffTimer} ref={this.timerRef}/> :
                        <span/>}
                    <span className="scoreboard">
                <h2> Score : {this.state.score} </h2>
            </span>
                </div>
            </div>

            <DisplayQuestion turnOffTimer={this.turnOffTimer} isTimerOn={this.state.isTimerOn}
                             questionNumber={this.state.questionNumber}
                             processCorrectAnswer={this.processCorrectAnswer} playerName={this.props.playerName}  />
        </div>
    }

}

export default Game;
