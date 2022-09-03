import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <div>
      <div className={s.message}>
        <div>{props.text}</div>
        <div className={s.messageDate}>
          {props.date}
        </div>
      </div>
    </div>
  );
}

export default Message;