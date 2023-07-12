import React from "react";
import '../style/App.css';

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  // Add handleChange() and submitMessage() methods here
  handleChange(e) {
    this.setState({
      input: e.target.value,
      messages: this.state.messages
    })
  }
  
  submitMessage() {
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    })
  }

  render() {
    return (
      <div>
        <h1>Manage State Locally First</h1>
        <h2>Type in a new Message: </h2>
        {/* Render an input, button, and ul below this line */}
        <input onChange={this.handleChange} value={this.state.input}/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>
          })}
        </ul>
        {/* Change code above this line */}
        <hr />
      </div>
    )
  }
};
export { DisplayMessages };
