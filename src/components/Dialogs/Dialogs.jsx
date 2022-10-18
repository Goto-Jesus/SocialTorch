import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  const styleButton = {fontSize: '60px'};
  
  let messangeElement = React.createRef();

  const onWritesMessange = () =>{
    let uiText = messangeElement.current.value;
    props.writesMessange(uiText);
  }

  const onAddMessange = () => {
    props.addMessange();
  };



  let DialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let MessagesElements = props.messages.map(m => <Message text={m.message} date={m.date} />);

  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {DialogsElements}
          {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />*/}
        </div>

        <div className={s.messages}>
          {/* <Message text={messangeASCII.scripty} /> */}
          {MessagesElements}
        </div>
        <br/>
        <div className={s.inputMessages}>
          <textarea ref={messangeElement} 
            placeholder="your messange..." 
            onChange={onWritesMessange}
            rows="12"
            value={props.currentMessage}/>
          <button onClick={onAddMessange} style={styleButton}>▶️</button>
        </div>
      </div>
  );
}
export default Dialogs;