'sue strict'


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 29.5577, lng: 34.9519 },
    zoom: 8,
  });
}