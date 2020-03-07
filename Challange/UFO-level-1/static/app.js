// from data.js
var tableData = data;

//get the body of the data
var tbody = d3.select("tbody");


///Code
 // Use d3 to update each cell's text with
    // UFO report values (`date/time`, `city`, `state`, `country`, `shape`, and `comment`)
 data.forEach(function(UFOReport) {
     console.log(UFOReport);
     var row = tbody.append("tr");
     Object.entries(UFOReport).forEach(function([key, value]) {
       console.log(key, value);

   // Append a cell to the row for each value
        // in the UFO report object
       var cell = row.append("td");
      cell.text(value);
   });
});
/// create var using queryselector
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBn = document.querySelector("#filter-btn");

//build function that renders table for search, allow to refresh
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < tableData.length; i++) {
      
      var data = tableData[i];
      var fields = Object.keys(data);
    

      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = data[field];
      }
    }
  }  
//call event listener
$searchBn.addEventListener("click", handleSearchButtonClick);


          function handleSearchButtonClick(event) {
        //stop refreash
            event.preventDefault();
          
            var filterDate = $dateInput.value.trim();
            if (filterDate != "") {
              tableData = data.filter(function (data) {
                var dataDate = data.datetime;
                return dataDate === filterDate;
              });
          };
          renderTable();
            }
          function resetData() {
            tableData = data;
            $dateInput.value = "";
          ///show table
            renderTable();
          }
     