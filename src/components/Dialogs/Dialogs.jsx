import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import messangeASCII from "./MyDialogsData";


const Dialogs = (props) => {

  // let dialogs=[
  //   {id:1, name:"Katya"},
  //   {id:2, name:"Vadya"},
  //   {id:3, name:"Max"},
  //   {id:4, name:"Kolya."}
  // ]
  // let messages=[
  //   {id:1, message:"hello"},
  //   {id:2, message:"how are you?"},
  //   {id:3, message:"ok nice"},
  //   {id:4, message:"i like you"},
  //   {id:5, message:"goodbuy."}
  // ]

  let messangeElement = React.createRef();

  let onChangeMessange = () =>{
    let uiText = messangeElement.current.value;
    props.newMessage(uiText);
  }

  let addMessange = () => {
    props.addMessange();
    props.newMessage("");
  };

  const styleButton = {
    fontSize: '60px'
  };

  let DialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let MessagesElements = props.dialogsPage.messages.map(m => <Message text={m.message} date={m.date} />);

  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {DialogsElements}
          {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />*/}
        </div>

        <div className={s.messages}>
          <Message text={messangeASCII.scripty} />
          {/* <Message text={messangeASCII.image} /> */}
          {MessagesElements}
        </div>
        <br/>
        <div className={s.inputMessages}>
          <textarea ref={messangeElement} 
          placeholder="your messange..." 
          onChange={onChangeMessange} 
          value={props.dialogsPage.newMessage}/>
          <button onClick={addMessange} style={styleButton}>▶️</button>
        </div>
      </div>
  );
}
export default Dialogs;