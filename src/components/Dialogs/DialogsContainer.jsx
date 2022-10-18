import React from "react";
import { connect } from "react-redux";
import { addMessangeActionCreator, newMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
//   let state = props.store.getState();

//   const onChangeMessange = (uiText) =>{
//     props.store.dispatch(newMessageActionCreator(uiText));
//   }

//   const addMessange = () => {
//     props.store.dispatch(addMessangeActionCreator());
//   };

//   return (
//       <Dialogs 
//         writesMessange ={onChangeMessange} 
//         addMessange = {addMessange} 
//         dialogs = {state.dialogsPage.dialogs}
//         messages = {state.dialogsPage.messages}
//         currentMessage= {state.dialogsPage.currentMessage}
//       />
//   );
// }


let mapState=(state)=>{
  return{
    dialogs:state.dialogsPage.dialogs,
    messages:state.dialogsPage.messages,
    currentMessage:state.dialogsPage.currentMessage,
  }
}
let mapDispatch=(dispatch)=>{
  return{
    addMessange:()=>{
      dispatch(addMessangeActionCreator());
    },
    writesMessange:(uiText)=>{
      dispatch(newMessageActionCreator(uiText));
    }
  }
}
const DialogsContainer = connect(mapState,mapDispatch)(Dialogs);

export default DialogsContainer;