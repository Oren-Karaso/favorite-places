'sue strict'


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 29.557, lng: 34.951 },
    zoom: 10,
  });
}