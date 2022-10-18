import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
// до 41 урока
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
    },
    _callSubscriber() {
        console.log("state chaged");
    },
    // _чертачка приватная
    getState() {
        return this._state;
    },
    subscribe(observer) {// принимаем функцию с index.js
        this._callSubscriber = observer;  // патерн observer - наблюдатель (как addEventLister, onClick...)
        // присваиваем существующей функции функционал с наблюдателя
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};

window.store = store;
export default store;
