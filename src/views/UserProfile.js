import React, {Component} from "react";
import PersonViewFull from "../components/PersonViewFull/PersonViewFull";

class UserProfile extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <div className="container" style={{marginTop: "10px"}}>
          <PersonViewFull {...this.props}/>
        </div>
      </div>
    );
  }
}
export default UserProfile;