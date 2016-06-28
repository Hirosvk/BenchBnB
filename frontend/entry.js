const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const BenchStore = require('./stores/bench_store');
const BenchAction = require('./actions/bench_action');
const BenchApiUtil = require('./util/bench_api_util');
const SessionApiUtil = require('./util/session_api_util');
const SessionAction = require('./actions/session_action');
const SessionStore = require('./stores/session_store');

const BenchMap = require('./components/bench_map');
const Search = require('./components/search');
const BenchForm = require('./components/bench_form');
const BenchIndex = require('./components/bench_index');
const Header = require('./components/header');
const LoginForm = require('./components/login_form');

const App = React.createClass({
  render (){
    return (
      <div>
        <Header />
        <h1>Bench Bnb</h1>
        {this.props.children}
      </div>
    );
  }
});

const AppRouter = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route component={Search}>
        <IndexRoute component={BenchIndex} />
        <Route path="benches/new(/?**)" component={BenchForm} />
      </Route>
      <Route path='/login' component={LoginForm} />
    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(AppRouter, document.getElementById('content'));
  }
);

window.$ = $;
window.SessionStore = SessionStore;
window.SessionAction = SessionAction;
window.SessionApiUtil = SessionApiUtil;
window.BenchAction = BenchAction;
window.BenchStore = BenchStore;
window.BenchMap = BenchMap;
