const ADD_MESSANGE = "ADD-MESSANGE";
const NEW_MESSANGE = "NEW-MESSANGE";

let initialState = {
    dialogs: [
        { id: 1, name: "Katya" },
        { id: 2, name: "Vadya" },
        { id: 3, name: "Max" },
        { id: 4, name: "Kolya." }
    ],
    messages: [
        { id: 1, message: "hello", date: "14:20" },
        { id: 2, message: "how are you?", date: "14:21" },
        { id: 3, message: "ok nice", date: "14:24" },
        { id: 4, message: "goodbuy.", date: "14:30" }
    ],
    currentMessage: ""
};

const dialogsReducer = (state=initialState, action) => {
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