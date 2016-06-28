const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');

const ErrorStore = new Store(Dispatcher);

let _errors = {};
let _formName = "";

ErrorStore.formErrors = function(formName){
  if (formName === _formName){
    return _errors;
  }
};

ErrorStore.form = function(){
  return _formName;
};

function setErrors(formName){
  _formName = formName;
}

function clearErrors(){
  _errors = {};
  _formName = "";
}

ErrorStore.__onDispatch = function(payload){
  // switch(payload.actionType){
  //
  // }
};
