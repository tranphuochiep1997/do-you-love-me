import React, {Component} from "react";
import PersonViewFull from "../components/PersonViewFull/PersonViewFull";
import Navbar from "../components/Navbar/Navbar";

class UserProfile extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Navbar history={this.props.history}/>
        <div className="container" style={{marginTop: "10px"}}>
          <PersonViewFull {...this.props}/>
        </div>
      </div>
    );
  }
}
export default UserProfile;