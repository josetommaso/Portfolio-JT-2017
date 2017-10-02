var map;
function initMap() {
	var bristol = {lat: 51.454514, lng: -2.587910};
  	map = new google.maps.Map(document.getElementById('map'), {
    center: bristol,
    zoom: 8
  });
  var marker = new google.maps.Marker({
  position: bristol,
  map: map
});
}
