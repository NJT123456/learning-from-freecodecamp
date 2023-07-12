// const state = [];

import { addMessage } from "./Extract_State_Logic_to_Redux";

const mapStateToProps = (state) => {
    return {
        messages: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) =>{
            dispatch(addMessage(message))
        }
    }
};


export { mapStateToProps, mapDispatchToProps }