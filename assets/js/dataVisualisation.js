let dataPoint = [];
fetch('https://canvasjs.com/services/data/datapoints.php').then(function(response) {
    response.json().then(function(json) {
      dataPoint.push(json);
    });
  });
  console.log(dataPoint);