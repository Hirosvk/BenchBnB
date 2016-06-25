const React = require('react');
const BenchIndex = require('./bench_index');
const BenchMap = require('./bench_map');

const Search = React.createClass({
  render (){
    return (
      <div className="search">
        <BenchIndex />
        <BenchMap />
      </div>
    );
  }
});

module.exports = Search;
