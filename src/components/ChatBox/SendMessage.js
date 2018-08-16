import React from "react";
import "./SendMessage.css";
import {Link} from "react-router-dom";

const SendMessage = (props) =>{
  return (
    <div className="container-send-message ">
      <Link to={`/profile/${props._id}`}><img className="send-picture" src={props.picture} alt="" /></Link>
      <p className="send-body">{props.body}</p>
    </div>
  );
}

export default SendMessage;