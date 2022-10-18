const ADD_POST = "ADD-POST";
const CURRENT_POST = "CURRENT-POST";
const ADD_MESSANGE = "ADD-MESSANGE";
const NEW_MESSANGE = "NEW-MESSANGE";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Привет єто мой первый пост.", likesCount: 10 },
                { id: 2, message: "Типа посты", likesCount: 5 },
                { id: 3, message: "Да это круто!", likesCount: 34 },
                { id: 4, message: "Поставте мне лайк", likesCount: 99 }
            ],
            currentPost: "",

        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                { id: 1, name: "Katya" },
                { id: 2, name: "Vadya" },
                { id: 3, name: "Max" }
            ]
        }
    }, // _чертачка приватная
    _callSubscriber() {
        debugger;
        console.log("state chaged");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {// принимаем функцию с index.js
        this._callSubscriber = observer;  // патерн observer - наблюдатель (как addEventLister, onClick...)
        // присваиваем существующей функции функционал с наблюдателя
    },

    _addPost() {
        let post = {
            id: this._state.profilePage.posts.length + 1,
            message: this._state.profilePage.currentPost,
            likesCount: 0
        };
        let checkLength = post.message.toString().length > 0;
        if (checkLength) {
            this._state.profilePage.posts.push(post);
        }
        this._state.profilePage.currentPost = "";
        this._callSubscriber(this._state);
    },
    _currentPost(getChar) {
        this._state.profilePage.currentPost = getChar;
        this._callSubscriber(this._state);
    },
    _addMessange() {
        let date = new Date();
        let textMessage = {
            id: this._state.dialogsPage.messages.length + 1,
            message: this._state.dialogsPage.currentMessage,
            date: `${date.getHours()}:${date.getMinutes()}`
        };
        let checkLength = textMessage.message.toString().length > 0;
        if (checkLength) {
            this._state.dialogsPage.messages.push(textMessage);
        }
        this._state.dialogsPage.currentMessage = "";
        this._callSubscriber(this._state);
    },
    _newMessage(getChar) {
        this._state.dialogsPage.currentMessage = getChar;
        this._callSubscriber(this._state);
    },
    dispatch(action) {//{type:'ADD-POST'}
        if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === CURRENT_POST) {
            this._currentPost(action.getChar)
        } else if (action.type === ADD_MESSANGE) {
            this._addMessange();
        } else if (action.type === NEW_MESSANGE) {
            this._newMessage(action.getChar);
        } else if (action.type === "") {

        }
    }
};

export const addMessangeActionCreator=()=>({type:ADD_MESSANGE})
export const newMessageActionCreator=(char)=>({type:NEW_MESSANGE,getChar:char})

export const addPostActionCreator = () => ({type: ADD_POST})
export const currentPostActionCreator = (char) => {
    return {
        type: CURRENT_POST,
        getChar: char
    }
}


window.store = store;

export default store;
