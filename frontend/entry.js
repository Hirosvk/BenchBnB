const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('./stores/bench_store');
const BenchAction = require('./actions/bench_action');
const BenchMap = require('./components/bench_map');

const Search = require('./components/search');

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Search />, document.getElementById('content'));
  }
);


window.BenchAction = BenchAction;
window.BenchStore = BenchStore;
window.BenchMap = BenchMap;
