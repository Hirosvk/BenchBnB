const Dispatcher = require('../dispatcher/dispatcher');
const BenchApiUtil = require('../util/bench_api_util');
const BenchConstants = require('../constants/bench_constants');

const BenchAction = {
  fetchAllBenches: function(bounds){
    console.log('Bench Action fetchAll');
    BenchApiUtil.fetchAllBenches(bounds, this.receiveAllBenches);
  },

  receiveAllBenches: function(benches){
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  createBench: function(bench){
    BenchApiUtil.createBench(bench, this.receiveSingleBench);
  },

  receiveSingleBench: function(bench){
    Dispatcher.dispatch({
      actionType: BenchConstants.SINGLE_BENCH_RECEIVED,
      bench: bench
    });
  }

};

module.exports = BenchAction;
