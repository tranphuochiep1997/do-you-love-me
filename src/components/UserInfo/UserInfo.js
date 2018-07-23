import React, {Component} from "react";
import "./UserInfo.css";

const UserInfo = (props) => {
  let {gender, birthday} = props;
  if (gender){
    gender = gender === 0 ? "Female" : "Male";
  }
  if (birthday){
    let splitDate = birthday.split("T")[0].split("-");
      birthday = splitDate[2] + '/' + splitDate[1] + "/" + splitDate[0];
  }

  return (
    <div className="userInfo-wrap-info"> 
      <div className="userInfo-heading">
        <span>BASIC INFORMATION</span>
      </div>
      <div className="userInfo-detail">
        <span>Name</span><span className="detail-value">{props.name}</span>
      </div>
      <div className="userInfo-detail">
        <span>Status</span><span className="detail-value">{props.status}</span>
      </div>
      <div className="userInfo-detail">
        <span>Birthday</span><span className="detail-value">{birthday}</span>
      </div>
      <div className="userInfo-detail">
        <span>Gender</span><span className="detail-value">{gender}</span>
      </div>
      <div className="userInfo-detail">
        <span>About</span><p className="detail-value">{props.about}</p>
      </div>
      <button onClick={props.onClickEditButton} className="btn btn-outline-info btn-xs my-2 my-sm-0 btn-edit-profile" type="button">Edit</button>
    </div>
  )
}

export default UserInfo;