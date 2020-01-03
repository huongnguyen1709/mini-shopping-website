import * as Types from './../constants/ActionTypes';
import * as Message from './../constants/Message';

var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch(action.type) { 
        case Types.CHANGE_MESSAGE :
            console.log(action);
            return action.message;
        default : 
            return state;
    }
}

export default message;