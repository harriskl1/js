// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// Console.log the weather data from data.js
 console.log(tableData);

 function buildTable(data){
    // First, clear out any existing data
    tbody.html("");
    data.forEach(function(dataRow) {
        
        console.log(dataRow);
        var row = tbody.append("tr");
        Object.entries(dataRow).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
   });
  });
 
}

function clickButton(){
//   // Prevent the page from refreshing
//  d3.event.preventDefault();
// var date = d3.select("#datetime").property("value");



 // Prevent the page from refreshing
 d3.event.preventDefault();
 
 var inputE = d3.select("#datetime");
 console.log(inputE);
 // Get the value property of the input element
 var inputValue = inputE.property("value");
 console.log(inputValue);
 console.log(tableData);


 let filteredData = tableData;

if (inputValue){
    filteredData = filteredData.filter(row => row.datetime === inputValue);
    console.log(filteredData)
}

 buildTable(filteredData);
}
// var inputElement = d3.select("#filter-btn");
// use d3 to selec the "#filter-btn"

d3.selectAll("#filter-btn").on("click", clickButton);
// inputElement.on("click", clickButton); 

buildTable(tableData);
