import React from "react";

class MyComponent3 extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // Change code below this line
        console.log("a")
        // Change code above this line
    }
    render() {
        return <h1>See on console</h1>
    }
};

class MyComponent4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUsers: null
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUsers: 1273
            });
        }, 2500);
    }
    render() {
        return (
            <div>
                {/* Change code below this line */}
                <h1>Active Users: {this.state.activeUsers}</h1>
                {/* Change code above this line */}
            </div>
        );
    }
}

class MyComponent5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // Change code below this line
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress)
    }
    // Change code above this line
    handleEnter() {
        this.setState((state) => ({
            message: state.message + 'You pressed the enter key! '
        }));
    }
    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }
    render() {
        return (
            <div>
                <h1>enter button</h1>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
};

class OnlyEvents extends React.Component{
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I update?');

        if(nextProps.value %2 == 0 ){
            return true;
        }
        return false;
    }

    componentWillReceiveProps(nextProps){
        console.log('Receiving new props...')
    }

    componentDidUpdate(){
        console.log('Component re-rendered')
    }

    render(){
        return <h1>{this.props.value}</h1>
    }
}

class Controller extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        };
        this.addValue = this.addValue.bind(this);
    }

    addValue() {
        this.setState(state => ({
            value: state.value + 1
        }))
    }

    render(){
        return(
            <div>
                <button onClick={this.addValue}>Add</button>
                <h1>Show Odd Number</h1>
                <OnlyEvents value={this.state.value}/>
            </div>
        )
    }
}

export { MyComponent3, MyComponent4, MyComponent5, Controller }
