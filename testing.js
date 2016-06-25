$.ajax({
  url: './api/benches',
  type: 'GET',
  success: function(resp){
    console.log(resp);
  },
  error: function(resp){
    console.log(resp);
  }
});

$.ajax({
  url: './api/benches',
  type: 'POST',
  data: {
    bench: {
      description: "check out this cool red bench.",
      lat: 37.800801,
      lng: -122.409962
    }
  },
  success: function(resp){
    console.log(resp);
  },
  error: function(resp){
    console.log(resp);
  }
})

let bench = {
  bench: {
    description: "check out this cool red bench.",
    lat: 37.800801,
    lng: -122.409962
  },
  authenticity_token: document.getElementById("authToken").value
};

const request = new XMLHttpRequest();
request.open("POST", "./api/benches", true);
request.onload = function(resp){console.log(resp);};
request.setRequestHeader('Content-Type', 'application/json');
request.send(JSON.stringify(bench));
