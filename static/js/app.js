// from data.js
var tabledatas = data;

console.log(tabledatas);

var tbody = d3.select("tbody");

var filtButton = d3.select("#filter-btn");

//load data/tables
function buildTable(data) {
  // First, clear out any existing data
  console.log("inside buildTable");

  console.log(data);

  tbody.html("");
 
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");
 
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
      cell.text(val);
    });
  });
 }

//main logic execute functions

buildTable(tabledatas);


// User clicks the button to filter data
filtButton.on("click", function() {  

  console.log("insde filtButton logic");

// Prevent the whole page from refreshing.
  d3.event.preventDefault();


    // Select the input element and get the raw HTML node- by date
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);


    // Get the value property of the input element
    var dateValue = inputDate.property("value");
    var cityValue = inputCity.property("value");
    var stateValue = inputState.property("value");
    var countryValue = inputCountry.property("value");
    var shapeValue = inputShape.property("value");

    console.log("dateValue " + dateValue);
    console.log("cityValue " + cityValue);
    console.log("stateValue " + stateValue);
    console.log("countryValue " + countryValue);
    console.log("shapeValue " + shapeValue);

    var filterData = tabledatas;

    filterData = filterData.filter(row => (row.datetime === dateValue) || (row.city === cityValue) || (row.state === stateValue)
                                   || (row.country === countryValue) || (row.shape === shapeValue));
   


   buildTable(filterData);

});