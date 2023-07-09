import React from 'react';
import logo from './logo.svg';
import './App.css';

const MyComponent = function() {
  return (
    <div>
      <h1>Create a Stateless Functional Component</h1>
    </div>
  );
};

class Component extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <hr />
      </div>
    );
  }
};
// Create a Component with Composition
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
        <hr />
      </div>
    );
  }
};

const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.tasks.join(', ')}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks ={["walk dog", "workout"]}/>
        <h2>Tomorrow</h2>
        <List tasks ={["walk dog", "workout", "come home"]}/>
        { /* Change code above this line */ }
        <hr />
      </div>
    );
  }
};

export {MyComponent, Component, ParentComponent, ToDo};
