// business logic for LoacationList

function LocationList() {
  this.locationInfos = {};
   this.currentId = 0;
};

LocationList.prototype.addLocation = function (locationInfo) {
  locationInfo.id = this.assignId();
  this.locationInfos[locationInfo.id] = locationInfo
}

LocationList.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

LocationList.prototype.findLocation = function(id) {
  if (this.locationInfos[id] != undefined) {
    return this.locationInfos[id];
  }
  return false;
};

LocationList.prototype.deleteLocation = function(id) {
  if (this.locationInfos[id] === undefined) {
    return false;
  }
  delete this.locationInfos[id]
  return true;
};

// business logic for LocationInfo
function LocationInfo(city, country, season, year, landmark) {
  this.city = city;
  this.country = country;
  this.season = season;
  this.year = year;
  this.landmark = landmark;
}



// UI Logic
function buildUI(location) {
  list.addLocation(location);
  const div = document.createElement("div")
  $(div).append("<h3>" + location.city + "</h3>")
  const details = document.createElement("ul");
  details.classList.add("hidden");
  $(details).append("<li> Country: " + location.country + "</li>");
  $(details).append("<li> Season: " + location.season + "</li>");
  $(details).append("<li> Year: " + location.year + "</li>");
  $(details).append("<li> Landmark: " + location.landmark + "</li>");
  $(div).append(details);
  $("#output").append(div);
  $("h3").off().on("click", function() {
    $(this).siblings("ul").toggleClass("hidden")
  });
}
const list = new LocationList();
$(document).ready(function() {
  $("form").submit((event) => {
    event.preventDefault();
    const city = $("#city-input").val()
    const country = $("#country-input").val()
    const season = $("#season-input").val()
    const year = $("#year-input").val()
    const landmark = $("#landmark-input").val()
    const location = new LocationInfo(city, country, season, year, landmark);
    buildUI(location);
  })
})

