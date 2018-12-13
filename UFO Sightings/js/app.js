// from data.js
var document = data;

// YOUR CODE HERE!
// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#dateTime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");

// Set variable for displaying number of results
let start = 0;
let stop = 50;
let page = 1;
let pages_length = Math.round((data.length)/50);
let total_results = data.length;
let $display1 = document.querySelector("#display1");
let $display2 = document.querySelector("#display2");
let $display3 = document.querySelector("#display3");

// Set variables for page navigation
let $nextBtn = document.querySelector(".next");
let $prevBtn = document.querySelector(".previous");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to addressData initially
var filteredData = data;

// renderTable renders the filteredAddresses to the tbody
function renderTable(begin,end) {
	$tbody.innerHTML = "";

	// Create if statement b/c sometimes filtered results are less than the preset number of displayed results and it loops too many times
	if (filteredData.length < end) {
		for (var i = begin, ii = filteredData.length; i<ii; i++) {
			var sighting = filteredData[i];
			var fields = Object.keys(sighting);

			// Create a new row in the tbody, set the index to be i + startingIndex
			var $row = $tbody.insertRow();
			for (var j = 0, jj = fields.length; j<jj; j++) {

			// For every field in the address object, create a new cell 
			// and set its inner text to be the current value at the current address's field
			var field = fields[j];
			var $cell = $row.insertCell(j);
			$cell.innerText = sighting[field];
			}
		}
	}
	else {
		for (var i = begin, ii = end; i<ii; i++) {

		// Get get the current alien sighting object and its fields
		var sighting = filteredData[i];
		var fields = Object.keys(sighting);

		// Create a new row in the tbody, set the index to be i + startingIndex
		var $row = $tbody.insertRow();
			for (var j = 0, jj = fields.length; j<jj; j++) {

			// For every field in the address object, create a new cell 
			// and set its inner text to be the current value at the current address's field
			var field = fields[j];
			var $cell = $row.insertCell(j);
			$cell.innerText = sighting[field];
			};
		};
	};
}

// Create function that filters the data
function filter(data, criteria) {
	return data.filter(function(sighting) {
		return Object.keys(criteria).every(function(c) {
			return sighting[c] == criteria[c];
		});
	});
}

// Create a function that handles the search button
function handleSearchButtonClick() {

	// Format the user's search by removing leading and trailing whitespace, lowercase the string
	var filteredDate =$dateInput.value.trim();
	var filteredCity =$cityInput.value.trim().toLowerCase();
	var filteredState = $stateInput.value.trim().toLowerCase();
	var filteredCountry =$countryInput.value.trim().toLowerCase();
	var filteredShape =$shapeInput.value.trim().toLowerCase();

	// Create an if/elseif statement for all possible search combinations for filtering data
	if (filteredDate && filteredCity && filteredState && filteredCountry && filteredShape) {
		filteredData = filter(data, {'datetime': filteredDate, 'city': filteredCity, 'state': filteredState, 'country': filteredCountry, 'shape': filteredShape});
	}
	else if (filteredDate && filteredCity && filteredState && filteredCountry) {
		filteredData = filter(data, {'datetime': filteredDate, 'city': filteredCity, 'state': filteredState, 'country': filteredCountry});
	}
	else if (filteredDate && filteredCity && filteredCountry && filteredShape) {
		filteredData = filter(data, {'datetime': filteredDate, 'city': filteredCity, 'country': filteredCountry, 'shape': filteredShape});
	}
	else if (filteredDate && filteredState && filteredCountry && filteredShape) {
		filteredData = filter(data, {'datetime': filteredDate, 'state': filteredState, 'country': filteredCountry, 'shape': filteredShape});
	}
	else if (filteredCity && filteredState && filteredCountry && filteredShape) {
		filteredData = filter(data, {'city': filteredCity, 'state': filteredState, 'country': filteredCountry, 'shape': filteredShape});
	}
	else if (filteredDate && filteredCity && filteredState) {
		filteredData = filter(data, {'datetime': filteredDate, 'city': filteredCity, 'state': filteredState});
	}
	else if (filteredDate && filteredCity && filteredCountry) {
		filteredData = filter(data, {'datetime': filteredDate, 'city': filteredCity, 'country': filteredCountry});
	}
	else if (filteredDate && filteredState && filteredCountry) {
		filteredData = filter(data, {'datetime': filteredDate, 'state': filteredState, 'country': filteredCountry});
	}
	else if (filteredDate && filteredCountry && filteredShape) {
		filteredData = filter(data, {'datetime': filteredDate, 'country': filteredCountry, 'shape': filteredShape});
	}
	else if (filteredCity && filteredState && filteredCountry) {
		filteredData = filter(data, {'city': filteredCity, 'state': filteredState, 'country': filteredCountry});
	}
	else if (filteredCity && filteredState && filteredShape) {
		filteredData = filter(data, {'city': filteredCity, 'state': filteredState, 'shape': filteredShape});
	}
	else if (filteredCity && filteredCountry && filteredShape) {
		filteredData = filter(data, {'city': filteredCity, 'country': filteredCountry, 'shape': filteredShape});
	}
	else if (filteredState && filteredCountry && filteredShape) {
		filteredData = filter(data, {'state': filteredState, 'country': filteredCountry, 'shape': filteredShape});
	}
	else if (filteredDate && filteredCity) {
		filteredData = filter(data, {'datetime': filteredDate, 'city': filteredCity});
	}
	else if (filteredDate && filteredState) {
		filteredData = filter(data, {'datetime': filteredDate, 'state': filteredState});
	}
	else if (filteredDate && filteredCountry) {
		filteredData = filter(data, {'datetime': filteredDate, 'country': filteredCountry});
	}
	else if (filteredDate && filteredShape) {
		filteredData = filter(data, {'datetime': filteredDate, 'shape': filteredShape});
	}
	else if (filteredCity && filteredState) {
		filteredData = filter(data, {'city': filteredCity, 'state': filteredState});
	}
	else if (filteredCity && filteredCountry) {
		filteredData = filter(data, {'city': filteredCity, 'country': filteredCountry});
	}
	else if (filteredCity && filteredShape) {
		filteredData = filter(data, {'city': filteredCity, 'shape': filteredShape});
	}
	else if (filteredState && filteredCountry) {
		filteredData = filter(data, {'state': filteredState, 'country': filteredCountry});
	}
	else if (filteredState && filteredShape) {
		filteredData = filter(data, {'state': filteredState, 'shape': filteredShape});
	}
	else if (filteredCountry && filteredShape) {
		filteredData = filter(data, {'country': filteredCountry, 'shape': filteredShape});
	}
	else if (filteredDate) {
		filteredData = filter(data, {'datetime': filteredDate});
	}
	else if (filteredCity) {
		filteredData = filter(data, {'city': filteredCity});
	}
	else if (filteredState) {
		filteredData = filter(data, {'state': filteredState});
	}
	else if (filteredCountry) {
		filteredData = filter(data, {'country': filteredCountry});
	}
	else {
		filteredData = filter(data, {'shape': filteredShape});
	};
	
	// Render filtered data table
	renderTable(start, stop);

	// Set total results to new length of filtered data
	total_results = filteredData.length;

	//  Display how many results were found
	$display1.innerHTML = 1;

	// Create if statement because sometimes results are less than the preset number of displayed results
	if (filteredData.length < stop){
		$display2.innerHTML = filteredData.length;
	}
	else {
		$display2.innerHTML = stop;
	};
	$display3.innerHTML = total_results;
}

// Create event listeners for page clickers
$nextBtn.addEventListener("click", function handleNext(event){
	event.preventDefault();
	if (page < pages_length){
		page += 1;
		start +=50;
		stop +=50;
		renderTable(start, stop);
		$display1.innerHTML = start + 1;
		$display2.innerHTML = stop;
	};
});

$prevBtn.addEventListener("click", function handlePrev(event){
	event.preventDefault();
	if (page > 1){
		page -= 1;
		start -=50;
		stop -=50;
		renderTable(start, stop);
		$display1.innerHTML = start + 1;
		$display2.innerHTML = stop;
	};
});

// Render table of original data set and display of results
renderTable(start, stop);
$display1.innerHTML = 1;
$display2.innerHTML = stop;
$display3.innerHTML = total_results;