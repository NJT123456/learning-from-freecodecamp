import React from "react";
function Simple_element_Class_and_Selft_Closing() {
    const JSX = (
        <div id="challenge-node">
            <h1>Hello World</h1>
            <p>Lets render this to the DOM</p>

            <div className="myDiv">
                <h1>Add a class to this div</h1>
                <hr />
            </div>
        </div>
    );
    return JSX;
}

const TypesOfFruit = () => {
    return (
        <div>
            <h2>Fruits:</h2>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    );
};

const Fruits = () => {
    return (
        <div>
            <TypesOfFruit />
        </div>
    );
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                <Fruits />
                <hr />
            </div>
        );
    }
};

const CurrentDate = (props) => {
    return (
        <div>
            { /* Change code below this line */}
            <p>The current date is: {props.date} </p>

            { /* Change code above this line */}
        </div>
    );
};

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>What date is it?</h3>
                { /* Change code below this line */}
                <CurrentDate date={Date()} />
                { /* Change code above this line */}

                <hr />
            </div>
        );
    }
};
export { Simple_element_Class_and_Selft_Closing, TypesOfFood, Calendar };