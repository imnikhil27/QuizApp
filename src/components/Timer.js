const React = require('react');

class Timer extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            time: 15,
        };
    }

    startTimer = () => {

        this.setState({
            time: this.state.time,
        });
        this.timer = setInterval(() => {
                this.setState({
                    time: this.state.time - 1,
                });
                if (this.state.time === 0) {
                    this.stopTimer();
                    this.props.turnOffTimer();
                }
            },
            1000);
    };

    stopTimer = () => {
        clearInterval(this.timer);
    };

    resetTimer = () => {
        this.setState({time: 15});
    };

    componentDidMount() {
        this.startTimer();
    }
    componentWillUnmount()
    {
        clearInterval(this.timer);

    }

    render() {
        return <span className="timer"><h2> Time left : {this.state.time} </h2></span>
    }

}

export default Timer;