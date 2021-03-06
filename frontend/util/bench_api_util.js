

const BenchApiUtil = {
  fetchAllBenches(bounds, successCallback) {
    const request = new XMLHttpRequest();
    request.open("GET", `./api/benches?bounds=${JSON.stringify(bounds)}`, true);

    request.onload = function(resp) {
      if (request.status >= 200 && request.status < 400){
        successCallback(JSON.parse(request.responseText));
      } else {
        console.log("XMLHttpRequest Error");
        console.log(resp);
      }
    };

    request.send();
  },

  createBench(newBench, successCallback){
    const request = new XMLHttpRequest();
    request.open("POST", "./api/benches", true);

    request.onload = function(resp) {
      if (request.status >= 200 && request.status < 400){
        successCallback(JSON.parse(request.responseText));
      } else {
        console.log("XMLHttpRequest Error");
        console.log(resp);
      }
    };
    newBench.authenticity_token = document.getElementsByName("csrf-token")[0].content;
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(newBench));
  }
};

module.exports = BenchApiUtil;
