import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GetInputField from "./GetInputField";


const useStylesButton = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


function GetButton(props) {
    const classes = useStylesButton();

    return <Button onClick={props.checkAnswer} size="large" className={classes.margin}>
        Submit
    </Button>
}

class DisplayQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: false,
            index: 0
        };
    }

    questions = [
        "Which of the actors on \"Friends\" unfortunately decides to whiten his teeth before going out on a first date with a girl he's had a crush on for some time?\n",
        "What is the name of the coffee house the Friends hangout at?",
        "Who is the paleontologist?",
        "What does Joey work as?",
        "Which Friend dates Janice first?",
        "What does Monica work as?",
        "Who did Rachel almost marry?",
        "What is Joey's catchphrase?",
        "What instrument does Phoebe play?",
        "What show do Joey and Chandler love to watch?",
        "What is the neighbor's name that lives below Rachel and Monica?",
        "What is Ross' son's name?",
        "Who is Carol's partner?",
        "What is Ross' monkey's name?",
        "Whose father has a show in Las Vegas?",
        "What did Rachel and Chandler eat off of the floor?",
        "What game did Chandler make up to give Joey money?",
        "What do Ross and Rachel name their daughter?",
        "Which Friend dates Richard?",
        "Who does Phoebe end up with?",
        "Where do Ross and Rachel get married?",
        "Which Friend used to be fat?",
        "Which Friend was once homeless?",
        "Who introduced Phoebe and Mike?",
        "What song does Ross sing to Emma that makes her laugh?",
        "Where is Rachel's first job after moving to the city?",
        "What is the building superintendant's name?",
        "Where do they all travel to when Ross is a key note speaker?",
        "Where are Ross, Rachel, and Monica from?",
        "Where do the Friends all live?",
    ];

    answers = [
        "Ross",
        "Central Perk",
        "Ross",
        "Actor",
        "Chandler",
        "Chef",
        'Barry',
        "How you doin",
        "Guitar",
        "Baywatch",
        "Mr.Heckles",
        "Ben",
        "Susan",
        "Marcel",
        "Chandler",
        "Cheese Cake",
        "Cups",
        "Emma",
        "Monica",
        "Mike",
        "Vegas",
        "Monica",
        "Phoebe",
        "Joey",
        "I like big butts",
        "Central Perk",
        "Mr.Treeger",
        "Barbados",
        "Long Island",
        "New York City",
    ];


    checkAnswer = () => {
        let answer = document.getElementById("outlined-basic").value;
        answer = answer.toLowerCase();
        answer = answer.replace(/\s/g, '');

        let correctAnswer = this.answers[this.state.index].toLowerCase().replace(/\s/g, '');
        if (answer === correctAnswer) {
            document.getElementById("answer-status").innerText = "Correct Answer";
            document.getElementById("outlined-basic").value = "";
            this.setState({answer: true});
            this.props.processCorrectAnswer();
            this.setState({index: this.selectRandomQuestion()});
            if (this.state.index === (this.answers.length - 1)) {
                //Do Nothing
            } else {

                setTimeout(() => {
                    document.getElementById("answer-status").innerText = "";
                }, 1000);
            }

        } else {
            document.getElementById("answer-status").innerText = "Wrong Answer.. Try again";
        }

    };

    selectRandomQuestion = () => {
        if (this.state.index === (this.answers.length - 1)) {
            this.props.turnOffTimer();
            return this.state.index + 1;
        }
        return this.state.index + 1;
    };

    componentDidMount() {
        let questionNumber = 0;
        this.setState({index: questionNumber});
    }

    render() {
        return (this.props.isTimerOn) ?
            <div className="question"><h2> Question : {this.props.questionNumber} </h2>
                <h2> {this.questions[this.state.index]}</h2>
                <GetInputField label="Type your answer"/>
                <GetButton checkAnswer={this.checkAnswer}/>
                <h3 id="answer-status"/>
            </div>
            :
            <div className="question">
                {this.state.index === (this.answers.length) ?
                    <h2>Woww you completed the quiz.. You're really a Friends addict</h2> :
                    <h2> Time's up.. Correct answer is <u>{this.answers[this.state.index]}</u></h2>}
                < h2> Well played {this.props.playerName} <br/></h2> <h2>Take screenshot of this page, share it on
                social media
                and challenge your friends to break your score in Friends quiz</h2>
                <h2> {this.props.playerName} Challenges : _________</h2>

            </div>;

    }

}

export default DisplayQuestion;
