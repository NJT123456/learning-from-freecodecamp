import React from "react";

const textAreaStyles = {
    width: 235,
    margin: 5
};

class MyToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            userInput: '',
            toDoList: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        const itemArray = this.state.userInput.split(',');
        this.setState({
            toDoList: itemArray
        });
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    render() {
        const items = this.state.toDoList.map(i => <li>{i}</li>);
        return (
            <div>
                <textarea onChange={this.handleChange}
                    value={this.state.userInput}
                    style={textAreaStyles}
                    placeholder="Separate Items With Commas"></textarea>
                <br />
                <button onClick={this.handleSubmit}>Create List</button>
                <h1>My "To Do" List:</h1>
                <ul>{items}</ul>
            </div>
        )
    }
}

class MyComponent7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    username: 'Jeff',
                    online: true
                },
                {
                    username: 'Alan',
                    online: false
                },
                {
                    username: 'Mary',
                    online: true
                },
                {
                    username: 'Jim',
                    online: false
                },
                {
                    username: 'Sara',
                    online: true
                },
                {
                    username: 'Laura',
                    online: true
                }
            ]
        };
    }
    render() {
        const usersOnline = this.state.users.filter(user => user.online === true); // Change this line
        const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>); // Change this line
        return (
            <div>
                <h1>Current Online Users:</h1>
                <ul>{renderOnline}</ul>
            </div>
        );
    }
}

export { MyToDoList, MyComponent7 }

