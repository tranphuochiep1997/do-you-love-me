import React, { Component } from 'react';
import Login from "./views/Login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import PrivateRoute from "./helpers/PrivateRoute";
import UserProfile from "./views/UserProfile";
import {connect} from "react-redux";
import UserInfo from "./components/UserInfo/UserInfo";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" loggedIn={this.props.loggedIn} component={Home} />
          {/* <Route exact path="/" component={UserInfo} /> */}
          <PrivateRoute exact path="/me" loggedIn={this.props.loggedIn} component={UserProfile} />
          {/* <Route exact path="/me" component={UserProfile} /> */}
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedIn: state.authenticationReducer.loggedIn
  }
}

export default connect(mapStateToProps)(App);
