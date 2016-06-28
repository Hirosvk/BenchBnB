const React = require('react');
const BenchApiUtil = require('../util/bench_api_util');
const hashHistory = require('react-router').hashHistory;

const BenchForm = React.createClass({
  getInitialState(){
    return ({description: "",
             seat_num: 0});
  },

  updateState(event){
    let newInput = {};
    newInput[event.target.id] = event.target.value;
    this.setState(newInput);
  },

  createNewBench(event){
    console.log('creating new bench');
    event.preventDefault();
    let newBench = this.state;
    newBench["lat"] = this.props.location.query.lat;
    newBench["lng"] = this.props.location.query.lng;
    BenchApiUtil.createBench(newBench, this.redirectToIndex);
  },

  redirectToIndex(){
    hashHistory.push("/");
  },

  render (){
    return (
      <form>
        <label>description
        <input type="text" id="description" value={this.state.description} onChange={this.updateState}/></label>
        <label>Number of seats
        <input type="number" id="seat_num" value={this.state.seat_num} onChange={this.updateState} /></label>
        <label>Lattitude
        <input type="text" id="lat" value={this.props.location.query.lat} readOnly/></label>
        <label>Longitude
        <input type="text" id="lng" value={this.props.location.query.lng} readOnly/></label>
        <input type="submit" value="Create New Bench" onClick={this.createNewBench}/>
      </form>
    );
  }

});

module.exports = BenchForm;
