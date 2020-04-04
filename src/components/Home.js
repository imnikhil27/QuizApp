import React from 'react';
import '../index.css'
import Game from "./Game";
import GetInputField from "./GetInputField";


function DisplayContent(props) {
    if (props.isGameStarted) {
        return <div className="content">
            <Game playerName={props.playerName}/>
        </div>

    } else {
        return <div className="content">
            <div>
                <div><GetInputField label="Enter your name"/></div>
                <div>
                    <button onClick={props.changeGameScreen} className="start-button">
                        <h2> Start Playing </h2>
                    </button>
                </div>
                <h2 id="start-game-error"></h2>
            </div>

        </div>
    }
}

function DisplayHeader(props) {
    return <div className="header">
        <h1 className="typewrite" data-period="2000"
            data-type='[ "Hello", "Namaskar", "Sat Shri Akaal", "Aadaab" ]'>
            <span className="wrap"/></h1>
        {props.isGameStarted ? <h1 id="opening-line">How you Doin' ? &#128536; </h1>
            :
            <h1 id="opening-line">If you're a competitive ass, test your fucking memory or just enjoy if you
                are bored &#128516; </h1>}
    </div>
}

function DisplayFooter() {
    return <div className=" footer">
        <h3> Together we shall overcome this virus <span className=" fa fa-heart pulse" aria-hidden='true'> </span></h3>
    </div>
}

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isGameStarted: false,
            playerName: "Player"
        }
    }

    changeGameScreen = () => {

        let inputName = document.getElementById("outlined-basic").value;
        if (inputName.length > 0) {
            this.setState({isGameStarted: true, playerName: inputName});
        } else {
            document.getElementById("start-game-error").innerText = "Enter a valid name";
        }

    };

    render() {

        return <div className=" wrapper">
            <DisplayHeader isGameStarted={this.state.isGameStarted}/>
            <DisplayContent isGameStarted={this.state.isGameStarted} changeGameScreen={this.changeGameScreen}
                            playerName={this.state.playerName}/>
            <DisplayFooter/>
        </div>

    }

}

export default Home;

