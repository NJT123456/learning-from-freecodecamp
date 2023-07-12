import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./Map_State_to_Props";

class Presentation extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Connect Redux to React</h1>
                <h3>This is a Presentational Component</h3>
                <hr />
            </div>
        )
    }
}

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentation)

export { ConnectedComponent }