import React from "react";

class MyApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'CamperBot'
        }
    }

    render() {
        return (
            <div>
                <Navbar name={this.state.name} />
            </div>
        )
    }
}

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Hello, my name is: {this.props.name}</h1>
            </div>
        );
    }
}

class MyApp1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }

        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        return (
            <div>
                <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
                <RenderInput input={this.state.inputValue}/>
            </div>
        );
    }
}

class GetInput extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h3>Get Input:</h3>
                <input value={this.props.input} onChange={this.props.handleChange} />
            </div>
        )
    }
}

class RenderInput extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
        <div>
            <h3>Input Render: </h3>
            <p>{this.props.input}</p>
        </div>)
    }
}
export { MyApp, MyApp1 }