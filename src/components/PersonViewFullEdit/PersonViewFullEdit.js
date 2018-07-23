import "./personViewFullEdit.css";
import React, {Component} from "react";
import { updateProfile } from "../../actions/userAction";

class PersonViewFullEdit extends Component {
  constructor(props){
    super(props);
    let {name, birthday, gender, about} = this.props;
    this.state = {
      name: name || "",
      birthday: birthday.split("T")[0] || "",
      gender: gender === 0 ? 0 : gender === 1 ? 1 : "",
      about: about || ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.getChangedObject = this.getChangedObject.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }
  getChangedObject(){
    const {state, props} = this;
    state.name = state.name.trim();
    state.about = state.about.trim();
    state.birthday = new Date(state.birthday).toISOString();
    let user = {};
    let hasChanged = false;
    if (state.name !== props.name){
      user.name = state.name;
      hasChanged = true;
    }
    if (state.birthday !== props.birthday){
      user.birthday = state.birthday;
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
    return {
      hasChanged,
      user
    }
  }
  async onSubmit(event){
    event.preventDefault();
    let {hasChanged, user} = this.getChangedObject();
    if (hasChanged){
      updateProfile(user);
    }
  }
  render(){
    return (
      <div className="person-view-full-edit">
        <form className="person-view-full-edit-wrap-info float-left" onSubmit={this.onSubmit}>
          <div className="person-view-full-edit-heading">
            <span>BASIC INFORMATION</span>
          </div>
          <div className="person-view-full-edit-detail">
            <span>Name</span>
            <input maxLength="30" name="name" className="detail-value" onChange={this.handleChange} value={this.state.name} />
          </div>
          <div className="person-view-full-edit-detail">
            <span>Birthday</span>
            <input name="birthday" type="date" max={new Date().toISOString().split('T')[0]} className="detail-value input-birthday" onChange={this.handleChange} value={this.state.birthday} />
          </div>
          <div className="person-view-full-edit-detail">
            <span>Gender</span>
            <select className="detail-value" value={this.state.gender} name="gender" onChange={this.handleChange}>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
          </div>
          <div className="person-view-full-edit-detail">
            <span>About</span>
            <textarea placeholder="Tell something about you" rows="5" className="detail-value" name="about" onChange={this.handleChange} value={this.state.about} />
          </div>
          <button className="btn btn-outline-info btn-xs my-2 my-sm-0 btn-save-profile" type="submit">Save</button>
        </form>
        <div className="person-view-full-edit-wrap-img">
          <img className="img-thumbnail rounded float-right person-view-full-edit-wrap-img" src={this.props.picture} alt=""/>
        </div>
      </div>
    );
  }
}

export default PersonViewFullEdit;