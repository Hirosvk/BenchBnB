const React = require('react');
const SessionAction = require('../actions/session_action');
const SessionStore = require('../stores/session_store');

const Header = React.createClass({

  getInitialState(){
    return {currentUser: SessionStore.currentUser()};
  },

  componentDidMount(){
    SessionStore.addListener(this.updateCurrentUser);
  },

  updateCurrentUser(){
    this.setState({currentUser: SessionStore.currentUser()});
  },

  headerMessage(){
    if (this.state.currentUser.id){
      return <p>Hello {this.state.currentUser.username}</p>;
    } else {
      return <p>You are not logged in</p>;
    }
  },

  render (){
    return (
      <header>
        {this.headerMessage()}
      </header>
    );
  }
});

module.exports = Header;
