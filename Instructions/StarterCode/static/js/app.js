// from data.js
var tableData = data;


var tbody = d3.select("tbody");

// Console.log the weather data from data.js
 console.log(tableData);

 function buildTable(data){
    data.forEach(function(dataRow) {
    console.log(dataRow);
    var row = tbody.append("tr");

    Object.entries(dataRow).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
      });
    });
};
// function clickbutton(){
//      // Prevent the page from refreshing
//   d3.event.preventDefault();
//  var date = d3.select("#datetime").property("value");
 
 buildTable(tableData);

 var inputElement = d3.select("#filter-btn");

inputElement.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
 
  var inputE = d3.select("#datetime");
  console.log(inputE);

 // Get the value property of the input element
  var inputValue = inputE.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(chart => chart.datetime === inputValue);
  console.log(filteredData)
});