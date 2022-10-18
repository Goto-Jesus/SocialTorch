// import {createStore} from "redux"; // не правильное подключение
import {combineReducers, legacy_createStore as createStore} from "redux"; // правильное подключекние, спасибо комментарию)))

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

let store = createStore(redusers);

export default store;