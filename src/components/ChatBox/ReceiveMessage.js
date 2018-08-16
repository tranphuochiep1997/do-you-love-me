import React from "react";
import "./ReceiveMessage.css";
import {Link} from "react-router-dom";

const ReceiveMessage = (props) =>{
  return (
    <div className="container-receive-message">
      <Link to={`/profile/${props._id}`}><img className="receive-picture" src={props.picture} alt="" /></Link>
      <p className="receive-body">{props.body}</p>
    </div>
  );
}

export default ReceiveMessage;