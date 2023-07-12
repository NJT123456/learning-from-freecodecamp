import { legacy_createStore as createStore } from 'redux';
import '../style/App.css';

// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message
    }
}

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.message];
            break;

        default:
            return state
    }
}

const store = createStore(messageReducer)

// class DisplayMessages_State extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             input: '',
//             messages: []
//         }

//         this.handleChange = this.handleChange.bind(this);
//         this.submitMessage = this.submitMessage.bind(this);
//     }

//     // Add handleChange() and submitMessage() methods here
//     handleChange(e) {
//         this.setState({
//             input: e.target.value,
//         })
//     }

//     submitMessage() {
//         this.setState((state) => {
//             const currentMessage = state.input;
//             return {
//                 input: '',
//                 messages: state.messages.concat(currentMessage)
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Manage State Locally First</h1>
//                 <h2>Type in a new Message: </h2>
//                 {/* Render an input, button, and ul below this line */}
//                 <input onChange={this.handleChange} value={this.state.input} />
//                 <button onClick={this.submitMessage}>Submit</button>
//                 <ul>
//                     {this.state.messages.map((message, idx) => {
//                         return <li key={idx}>{message}</li>
//                     })}
//                 </ul>
//                 {/* Change code above this line */}
//                 <hr />
//             </div>
//         )
//     }
// };
export { store, addMessage };