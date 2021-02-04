'user strict'

var gCoords = [];
// const mapEvents = new H.mapEvents.MapEvents(map);
// const behavior = new H.mapEvents.Behavior(mapEvents);

// function getCoord() {
//     map.addEventListener('tap', event => {
//         const position = map.screenToGeo(
//             event.currentPointer.viewportX,
//             even.currentPointer.viewportY
//         );
//         let name = prompt('Name the place');
//         console.log('Position clicked:', position);
//         let locObj = {name: name, coordinates: position};
//         gCoords.push(locObj);
//         let marker = new H.map.Marker(position);
//         map.addObject(marker);
//     });

// console.log('gcoords:', gCoords);
// }

function getPosition() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return;
    }

    // One shot position getting or continus watch
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
    // navigator.geolocation.watchPosition(showLocation, handleLocationError);
}

function showLocation(position) {
    console.log(position);
    document.getElementById("latitude").innerHTML = position.coords.latitude;
    document.getElementById("longitude").innerHTML = position.coords.longitude;
    document.getElementById("accuracy").innerHTML = position.coords.accuracy;

    var date = new Date(position.timestamp);
    document.getElementById("timestamp").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    initMap(position.coords.latitude, position.coords.longitude);
}

function handleLocationError(error) {
    var locationError = document.getElementById("locationError");

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message;
            break;
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location.";
            break;
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message;
            break;
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location.";
            break;
    }
}

