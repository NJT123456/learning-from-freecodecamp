import React from "react";

class Presentation1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Remove property 'messages' from Presentational's local state
            input: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    submitMessage() {
        // Call 'submitNewMessage', which has been mapped to Presentational's props, with a new message;
        // meanwhile, remove the 'messages' property from the object returned by this.setState().
        this.props.submitNewMessage(this.state.input);
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Extract Local State into Redux</h1>
                <h2>Type in a new Message:</h2>
                <input onChange={this.handleChange} value={this.state.input} />
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                    {/* The messages state is mapped to Presentational's props; therefore, when rendering,
               you should access the messages state through props, instead of Presentational's
               local state. */}
                    {this.props.messages.map((message, idx) => {
                        return (
                            <li key={idx}>{message}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export { Presentation1 }