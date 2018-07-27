import React, {PureComponent} from "react";
import {updateProfile} from "../../actions/userAction";
import "./FormEditUser.css";

class FormEditUser extends PureComponent {
  constructor(props) {
    super(props);
    let {name, birthday, status, gender, about} = props;
    this.state = {
      name: name || "",
      status,
      birthday: !birthday ? "" : birthday.split("T")[0],
      gender: gender === 0 ? 0 : (gender === 1 ? 1 : ""),
      about: about || ""
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getChangedObject = this.getChangedObject.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    let {hasChanged, user} = this.getChangedObject({state: this.state, props: this.props});
    if (hasChanged === true){
      updateProfile(user);
    }
    this.props.onClickSaveButton();
  }
  getChangedObject({state, props}){
    state.name = state.name.trim();
    state.about = state.about.trim();
    let user = {};
    let hasChanged = false;
    if (state.name !== props.name){
      user.name = state.name;
      hasChanged = true;
    }
    if (state.birthday !== props.birthday){
      if (state.birthday){
        user.birthday = new Date(state.birthday).toISOString();
      } else {
        user.birthday = "";
      }
      hasChanged = true;
    }
    if (state.gender !== props.gender){
      user.gender = state.gender;
      hasChanged = true;
    }
    if (state.about !== props.about){
      user.about = state.about;
      hasChanged = true;
    }
    if (state.status !== props.status){
      user.status = state.status;
      hasChanged = true;
    }
    return {
      hasChanged,
      user
    }
  }
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form className="formEditUser-edit-wrap-info" onSubmit={this.onSubmit}>
        <div className="formEditUser-edit-heading">
          <span>BASIC INFORMATION</span>
        </div>
        <div className="formEditUser-edit-detail">
          <span>Name</span>
          <input maxLength="30" name="name" className="detail-value" onChange={this.handleChange} value={this.state.name} />
        </div>
        <div className="formEditUser-edit-detail">
          <span>Status</span>
          <input maxLength="20" name="status" className="detail-value" onChange={this.handleChange} value={this.state.status} />
        </div>
        <div className="formEditUser-edit-detail">
          <span>Birthday</span>
          <input name="birthday" type="date" max={new Date().toISOString().split('T')[0]} className="detail-value input-birthday" onChange={this.handleChange} value={this.state.birthday} />
        </div>
        <div className="formEditUser-edit-detail">
          <span>Gender</span>
          <select className="detail-value" value={this.state.gender} name="gender" onChange={this.handleChange}>
            <option value="1">Male</option>
            <option value="0">Female</option>
            <option value=""></option>
          </select>
        </div>
        <div className="formEditUser-edit-detail">
          <span>About</span>
          <textarea placeholder="Tell something about you" rows="5" className="detail-value" name="about" onChange={this.handleChange} value={this.state.about} />
        </div>
        <button className="btn btn-outline-info btn-xs my-2 my-sm-0 btn-save-profile" type="submit">Save</button>
      </form>
    )
  }
}

export default FormEditUser;