import React from "react";

class MyComponent1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Initial State'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // Change code below this line
        this.setState({
            name: 'React Rocks!'
        })
        // Change code above this line
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
};

class MyComponent2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        // Change code below this line
        this.toggleVisibility = this.toggleVisibility.bind(this);
        // Change code above this line
    }
    // Change code below this line
    toggleVisibility() {
        this.setState(state => {
            if (state.visibility == true) {
                return { visibility: false };
            } else {
                return { visibility: true };
            }
        })
    }
    // Change code above this line
    render() {
        if (this.state.visibility) {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                    <h1>Now you see me!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                </div>
            );
        }
    }
}

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={count : 0};
    
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    }

    // function
    increment(){
        this.setState(state => ({count: state.count + 1}))
    }

    decrement(){
        this.setState(state => ({count: state.count - 1}))
    }

    reset(){
        this.setState({ count: 0 });
    }

    render() {
        return (
            <div>
                <button className="inc" onClick={this.increment}>Increment!</button>
                <button className="dec" onClick={this.decrement}>Decrement!</button>
                <button className="reset" onClick={this.reset}>Reset</button>
                <h1>Current Count: {this.state.count}</h1>
            </div>
        );
    }

};

class ControlledInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };

        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.handleChange} />
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        )
    }
};

class MyForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            submit: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault()
        this.setState({
            submit: this.state.input
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange}/>
                    <button type="submit">Submit!</button>
                </form>
                <h1>{this.state.submit}</h1>
            </div>
        )
    }
}


export { MyComponent1, MyComponent2, Counter, ControlledInput, MyForm }