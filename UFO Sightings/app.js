//Defining Variables
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#dateTime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");

//Number of Results
let start = 0;
let stop = 50;
let page = 1;
let pages_length = Math.round((data.length)/50);
let total_results = data.length;
let $display1 = document.querySelector("#display1");
let $display2 = document.querySelector("#display2");
let $display3 = document.querySelector("#display3");

//Page Navigation Variables
let $nextBtn = document.querySelector(".next");
let $prevBtn = document.querySelector(".previous");

//Event Listener for Search
$searchBtn.addEventListener("click", handleSearchButtonClick);

//Filtered Data before the filter is naturally just the Data
var filteredData = data;

//Rendering Table
function renderTable(begin,end) {
	$tbody.innerHTML = "";

	//Without this preset, if the filtered results are less than the number of results seeked, the process will loop and bring back multiple duplicates.
	if (filteredData.length < end) {
		for (var i = begin, ii = filteredData.length; i<ii; i++) {
			var sighting = filteredData[i];
			var fields = Object.keys(sighting);
			//New Row
			var $row = $tbody.insertRow();
			for (var j = 0, jj = fields.length; j<jj; j++) {
			//New Cell for each Field
			//Fix Inner Text to Current Value
			var field = fields[j];
			var $cell = $row.insertCell(j);
			$cell.innerText = sighting[field];
			}
		}
	}
	else {
		for (var i = begin, ii = end; i<ii; i++) {
		//Current object and its fields
		var sighting = filteredData[i];
		var fields = Object.keys(sighting);
		//New Row in Tbody
		var $row = $tbody.insertRow();
			for (var j = 0, jj = fields.length; j<jj; j++) {
			//New Cell for every Field
			//Fix Inner Text to Current Value
			var field = fields[j];
			var $cell = $row.insertCell(j);
			$cell.innerText = sighting[field];
			};
		};
	};
}

//Filtering Function
function filter(data, criteria) {
	return data.filter(function(sighting) {
		return Object.keys(criteria).every(function(c) {
			return sighting[c] == criteria[c];
		});
	});
}

//Search Function
function handleSearchButtonClick() {
	//Normalizing the Strings to Lower Case and Removing Blank Space
	var filteredDate =$dateInput.value.trim();
	var filteredCountry =$countryInput.value.trim().toLowerCase();
	var filteredState = $stateInput.value.trim().toLowerCase();
	var filteredCity =$cityInput.value.trim().toLowerCase();
	var filteredShape =$shapeInput.value.trim().toLowerCase();

	//If Statements and Combinatorics (Combining Filtered Search Criteria)
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
	//Rendering Filtered Table
	renderTable(start, stop);
	//Fixing Results Total to the Size of Filtered Data
	total_results = filteredData.length;
	//Number of Results found
	$display1.innerHTML = 1;
	if (filteredData.length < stop){
		$display2.innerHTML = filteredData.length;
	}
	else {
		$display2.innerHTML = stop;
	};
	$display3.innerHTML = total_results;
}

//Event Listeners for our Clicks
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

//Render Table
renderTable(start, stop);
$display1.innerHTML = 1;
$display2.innerHTML = stop;
$display3.innerHTML = total_results;