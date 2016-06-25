const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const BenchConstants = require('../constants/bench_constants');

const BenchStore = new Store(Dispatcher);

let _benches;

BenchStore.all = function() {
  if (_benches) {
    return Array.from(_benches);
  } else {
    return [];
  }
};

function resetAllBenches (benches) {
  _benches = benches;
}

BenchStore.__onDispatch = function (payload){
  switch (payload.actionType){
    case BenchConstants.BENCHES_RECEIVED:
      resetAllBenches(payload.benches);
      this.__emitChange();
      break;
    case BenchConstants.SINGLE_BENCH_RECEIVED:
      this.__emitChange();
      break;
  }
};

module.exports = BenchStore;
