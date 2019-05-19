import React, { Component } from 'react';
import Login from "./views/Login";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './views/Home';
import PrivateRoute from "./helpers/PrivateRoute";
import UserProfile from "./views/UserProfile";
import {connect} from "react-redux";
import ChatRoom from "./views/ChatRoom";
import FriendProfile from './views/FriendProfile';
import Register from './views/Register';
import SearchPage from "./views/SearchPage";


class App extends Component {
  render() {
    const { loggedIn } = this.props;
    return (     
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/profile/me" loggedIn={loggedIn} component={UserProfile} />
          <PrivateRoute exact path="/profile/:id" loggedIn={loggedIn} component={FriendProfile} />
          <PrivateRoute exact path="/chat/:id" loggedIn={loggedIn} component={ChatRoom} />
          <PrivateRoute exact path="/search/:name" loggedIn={loggedIn} component={SearchPage} />
          <PrivateRoute path="/" loggedIn={loggedIn} component={Home} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedIn: state.userReducer.loggedIn
  }
}

export default connect(mapStateToProps)(App);
