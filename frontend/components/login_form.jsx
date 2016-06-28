const React = require('react');
const SessionAction = require('../actions/session_action');
const SessionStore = require('../stores/session_store');

const LoginForm = React.createClass({

  submitForm(event){
    event.preventDefault();
    let userInfo = {
      username: this.refs.username.value,
      password: this.refs.password.value
    };
    console.log(userInfo);
    SessionAction.login(userInfo);
  },

  render (){
    return (
      <form onSubmit={this.submitForm}>
        <label>username
        <input type="text" ref="username"/></label>

        <label>password
        <input type="password" ref="password"/></label>

        <button>LogIn</button>
      </form>
    );
  }
});

module.exports = LoginForm;
