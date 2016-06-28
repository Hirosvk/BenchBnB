const Dispatcher = require('../dispatcher/dispatcher');
const SessionApiUtil = require('../util/session_api_util');
const SessionConstants = require('../constants/session_constants');

const SessionAction = {
  signup(userInfo){
    SessionApiUtil.signup(userInfo, this.receiveCurrentUser);
  },

  login(userInfo){
    SessionApiUtil.login(userInfo, this.receiveCurrentUser);
  },

  logout(){
    SessionApiUtil.logout(this.removeCurrentUser);
  },

  receiveCurrentUser(currentUser){
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: currentUser
    });
  },

  removeCurrentUser(){
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
    });
  }

};

module.exports = SessionAction;
