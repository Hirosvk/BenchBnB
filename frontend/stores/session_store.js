const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');

const SessionStore = new Store(Dispatcher);

let _currentUser = {};

function _login(user){
  _currentUser = user;
}

function _logout(){
  _currentUser = {};
}

SessionStore.currentUser = function(){
  return _currentUser;
};

SessionStore.isUserLoggediIn = function(){
  return Boolean(_currentUser.id);
};

SessionStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case SessionConstants.LOGIN:
      _login(payload.user);
      this.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _logout();
      this.__emitChange();
      break;
  }
};

module.exports = SessionStore;
