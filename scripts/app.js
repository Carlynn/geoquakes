// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!

  let earthquakeTemplate = function() {
  return
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div id="map"></div>
      </div>
      <div class="col-md-6">
        <div id="info">
          <h1>Earthquakes from the past week:</h1>
          <!-- <p>M 4.2 - 1km ESE of Fontana, California / 123 hours ago </p> -->
        </div>
      </div>
    </div>
  </div>
}


//GET information from sit
  $.ajax({
    type: "GET",
    url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson",
  })

});
