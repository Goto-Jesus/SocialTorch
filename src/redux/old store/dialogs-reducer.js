const ADD_MESSANGE = "ADD-MESSANGE";
const NEW_MESSANGE = "NEW-MESSANGE";

const dialogsReducer = (state, action) => {
    function _addMessange() {
        let date = new Date();
        let textMessage = {
            id: state.messages.length + 1,
            message: state.currentMessage,
            date: `${date.getHours()}:${date.getMinutes()}`
        };
        let checkLength = textMessage.message.toString().length > 0;
        if (checkLength) {
            state.messages.push(textMessage);
        }
        state.currentMessage = "";
    }
    function _newMessage(getChar) {
        state.currentMessage = getChar;
    }

    switch (action.type) {
        case ADD_MESSANGE:
            _addMessange();
            return state;
        case NEW_MESSANGE:
            _newMessage(action.getChar);
            return state;
        default:
            return state;
    }
}

export const addMessangeActionCreator = () => ({ type: ADD_MESSANGE })
export const newMessageActionCreator = (char) => ({ type: NEW_MESSANGE, getChar: char })

export default dialogsReducer;