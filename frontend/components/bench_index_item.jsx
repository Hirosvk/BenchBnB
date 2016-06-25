const React = require('react');

const BenchIndexItem = React.createClass({

  render(){
    return (
      <li className="bench-index-item">
        <p>{this.props.bench.description}</p>
        <p>{this.props.bench.lat}</p>
        <p>{this.props.bench.lng}</p>
      </li>
    );
  }

});

module.exports = BenchIndexItem;
