import React from "react";
import "./FriendInfo.css";

const FriendInfo = (props) => {
  let { name, status, gender, birthday, about, picture, _id } = props;
  let transferBirthday = "";
  if (birthday) {
    let splitDate = birthday.split("T")[0].split("-");
    transferBirthday = splitDate[2] + '/' + splitDate[1] + "/" + splitDate[0];
  }
  return (
    <div className="friendInfo">
      <div className="friendInfo-wrap-info float-left">
        <div className="friendInfo-heading">
          <span className="">BASIC INFORMATION</span>
          <button onClick={()=>{props.history.push(`/chat/${_id}`)}} className="btn btn-outline-success btn-md btn-message" type="button">Message</button>
        </div>
        <div className="friendInfo-detail">
          <span>Name</span><span className="detail-value">{name}</span>
        </div>
        <div className="friendInfo-detail">
          <span>Status</span><span className="detail-value">{status}</span>
        </div>
        <div className="friendInfo-detail">
          <span>Birthday</span><span className="detail-value">{transferBirthday}</span>
        </div>
        <div className="friendInfo-detail">
          <span>Gender</span><span className="detail-value">{gender}</span>
        </div>
        <div className="friendInfo-detail">
          <span>About</span><p className="detail-value">{about}</p>
        </div>
      </div>
      <div className="friendInfo-wrap-img">
        <img className="img-thumbnail rounded float-right" src={picture} alt="" />
      </div>
    </div>
  )
}

export default FriendInfo;