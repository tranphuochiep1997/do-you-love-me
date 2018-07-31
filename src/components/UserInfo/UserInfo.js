import React, {Component} from "react";
import "./UserInfo.css";

const UserInfo = (props) => {
  let {gender, birthday, name, status, about} = props;
  let trasnferBirthday = "";
  if (birthday){
    let splitDate = birthday.split("T")[0].split("-");
    trasnferBirthday = splitDate[2] + '/' + splitDate[1] + "/" + splitDate[0];
  }

  return (
    <div className="userInfo-wrap-info"> 
      <div className="userInfo-heading">
        <span>BASIC INFORMATION</span>
      </div>
      <div className="userInfo-detail">
        <span>Name</span><span className="detail-value">{name}</span>
      </div>
      <div className="userInfo-detail">
        <span>Status</span><span className="detail-value">{status}</span>
      </div>
      <div className="userInfo-detail">
        <span>Birthday</span><span className="detail-value">{trasnferBirthday}</span>
      </div>
      <div className="userInfo-detail">
        <span>Gender</span><span className="detail-value">{gender}</span>
      </div>
      <div className="userInfo-detail">
        <span>About</span><p className="detail-value">{about}</p>
      </div>
      <button onClick={props.onClickEditButton} className="btn btn-outline-info btn-xs my-2 my-sm-0 btn-edit-profile" type="button">Edit</button>
    </div>
  )
}

export default UserInfo;