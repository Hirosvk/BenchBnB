const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('../stores/bench_store');
const BenchAction = require('../actions/bench_action');

const BenchMap = React.createClass({
  getInitialState(){
    return {benches: BenchStore.all(), markers: []};
  },

  componentDidMount(){
    BenchStore.addListener(this.updateBenches);

    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    // goolge.maps API is loaded on application.html.erb
    this.map.addListener('idle', this.fetchAllBenches);
  },

  fetchAllBenches(){
    console.log("bench map all benches");
    BenchAction.fetchAllBenches();
  },

  updateBenches(){
    this.setState({benches: BenchStore.all()}, this.addMarkers);
  },

  addMarkers(){
    let newMarkers = [];
    this.state.benches.forEach( bench => {
      let benchPos = {lat: bench.lat, lng: bench.lng};
      let newMarker = new google.maps.Marker({
        position: benchPos,
        map: this.map,
        title: bench.description
      });

      newMarkers.push(newMarker);
    });
    this.setState({markers: newMarkers});
  },



  render(){
    return <div className="map" ref="map" />;
  }
});

module.exports = BenchMap;
