const React = require('react');
const BenchAction = require('../actions/bench_action');
const BenchStore = require('../stores/bench_store');
const BenchIndexItem = require('./bench_index_item');

const BenchIndex = React.createClass({
  getInitialState(){
    return { benches: BenchStore.all()};
  },

  componentDidMount(){
    BenchStore.addListener(this.onStoreChange);
    // BenchAction.fetchAllBenches();
  },

  onStoreChange(){
    this.setState({benches: BenchStore.all()});
  },

  render(){
    return (
      <div className="bench-index">
        <ul>
        {
          this.state.benches.map( bench => {
            return (<BenchIndexItem bench={bench} key={bench.id}/>);
          })
        }
        </ul>
      </div>
    );
  }

});

module.exports = BenchIndex;
