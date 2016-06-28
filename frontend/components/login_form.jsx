const React = require('react');
const SessionAction = require('../actions/session_action');
const SessionStore = require('../stores/session_store');
const hashHistory = require('react-router').hashHistory;

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

  componentDidMount(){
    this.listener = SessionStore.addListener(this.redirectToRoot);
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  redirectToRoot(){
    if (SessionStore.isUserLoggediIn()){
      hashHistory.push("/");
    }
  },

  render (){
    return (
      <form onSubmit={this.submitForm}>
        <label>username
        <input type="text" ref="username"/></label>

        <label>password
        <input type="password" ref="password"/></label>

        <input type="submit" value="Login" />
      </form>
    );
  }
});

module.exports = LoginForm;
