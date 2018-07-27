import React from "react";
import "./ReceiveMessage.css";

const ReceiveMessage = (props) =>{
  return (
    <div className="container-receive-message">
      <img className="receive-picture" src={props.picture} alt="" />
      <p className="receive-body">{props.body}</p>
    </div>
  );
}

export default ReceiveMessage;