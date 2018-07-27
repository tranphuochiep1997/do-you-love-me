import "./personViewFull.css";
import React, {Component} from "react";
import FormEditUser from "../FormEditUser/FormEditUser";
import UserInfo from "../UserInfo/UserInfo";
import {connect} from "react-redux";

class PersonViewFull extends Component {
  constructor(props){
    super(props);
    this.state = {
      editting: false
    }
  }
  render(){
    if (this.props.error === "failed"){
      alert("Fetching failed");
      return null;
    }
    return (
      <div className="person-view-full">
        <div className="person-view-full-wrap-info float-left">
        {
          this.state.editting 
          ?
          <FormEditUser {...this.props.user} 
                        onClickSaveButton={()=> {
                          this.setState({editting: false});
                        }} />
          :
          <UserInfo {...this.props.user} 
                    onClickEditButton={() => this.setState({editting: true})}/>
        }
        </div>
        <div className="person-view-full-wrap-img">
          <img className="img-thumbnail rounded float-right" src={this.props.user.picture} alt=""/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
    user: state.userReducer.user,
    error: state.userReducer.error
  }
}
export default connect(mapStateToProps)(PersonViewFull);