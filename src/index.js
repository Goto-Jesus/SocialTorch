import reportWebVitals from './reportWebVitals';// не обращаем внимания пока что 
import React from 'react';
import ReactDOM from 'react-dom/client';

import store from './redux/redux-store';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App 
                        state={state}
                        store={store}
                        dispatch={store.dispatch.bind(store)}
                    />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}
renderEntireTree(store.getState());// первый вызов
// store.subscribe(renderEntireTree); // передаем функцию в state без импорта 
// //чтоб там при изминении стейта обновилось дерево

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
