import reportWebVitals from './reportWebVitals';// не обращаем внимания пока что 
import {reRenger} from './renrer';
import state from './redux/state';
import { addPost } from './redux/state';
import { currentPost } from './redux/state';

// const LookAlert = (message) =>{
//     alert(message); //пример
// };

reRenger(state,addPost,currentPost);// чистая функция / clear function

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
