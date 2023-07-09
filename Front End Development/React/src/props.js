import React from "react";
import PropTypes from "prop-types";

const Items = (props) => {
    return (
        <div>
            <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
            <hr />
        </div>
    )
}

Items.propTypes = {
    quantity: PropTypes.number.isRequired
}

Items.defaultProps = {
    quantity: 0
}

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        { /* Change code below this line */ }
        return <Items quantity={10} />
        { /* Change code above this line */ }
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                { /* Change code below this line */}
                <Welcome name="a" />
                <hr />
                { /* Change code above this line */}
            </div>
        );
    }
};

class Welcome extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                { /* Change code below this line */}
                <p>Hello, <strong>{this.props.name}</strong>!</p>
                { /* Change code above this line */}
            </div>
        );
    }
};

class CampSite extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Camper />
            </div>
        );
    }
};
// Change code below this line
const Camper = (props) => {
    return <p>{props.name}</p>
}

Camper.defaultProps = {
    name: "CamperBot"
};

Camper.propTypes = {
    name: PropTypes.string.isRequired
}

class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        // Only change code below this line
        this.state = {
            firstName: "firstName"
        }
        // Only change code above this line
    }
    render() {
        return (
            <div>
                <h1>{this.state.firstName}</h1>
            </div>
        );
    }
};



export { ShoppingCart, App, CampSite, StatefulComponent };