const React = require('react');
const BenchIndex = require('./bench_index');
const BenchMap = require('./bench_map');

const Search = React.createClass({
  render (){
    return (
      <div className="search">
        <BenchMap />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Search;
