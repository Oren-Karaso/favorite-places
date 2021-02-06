'sue strict'
let gMap;

function initMap(latitude, longtitude) {

    gMap = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longtitude },
        zoom: 12,
    });

    gMap.addListener("click", (e) => {
        placeMarkerAndPanTo(e.latLng, gMap);
    });
    gUser.map = gMap;
    _saveUserToStorage();
}

function mapReady() {
    console.log('Map is ready');
}

function placeMarkerAndPanTo(latLng, gMap) {
    new google.maps.Marker({
        position: latLng,
        map: gMap,
    });
    gMap.panTo(latLng);

}