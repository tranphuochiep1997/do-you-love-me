import React from "react";
import "./SendMessage.css";

const SendMessage = (props) =>{
  return (
    <div className="container-send-message ">
      <img className="send-picture" src={props.picture} alt="" />
      <p className="send-body">{props.body}</p>
    </div>
  );
}

export default SendMessage;