let map;

function initMap() {
    // The location of Uluru
    const uluru = { lat: 19.030479, lng: -98.182609 };
    const latLng = { lat: 19.372363, lng: -99.215443 };
    const latLng1 ={lat:19.042934, lng:-98.197597};
    const latLng2 ={lat:19.3792553, lng:-97.6107005};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: uluru,
    });  
// Loop through the results array and place a marker for each
// set of coordinates.
    const flightPlanCoordinates = [
        uluru,
        latLng,
    ];
    const flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    flightPath.setMap(map);

    const flightPlanCoordinates1 = [
        uluru,
        latLng1,
    ];
    const flightPath1 = new google.maps.Polyline({
        path: flightPlanCoordinates1,
        geodesic: true,
        strokeColor: "#0000FF",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    flightPath1.setMap(map);

    const flightPlanCoordinates2 = [
        uluru,
        latLng2,
    ];
    const flightPath2 = new google.maps.Polyline({
        path: flightPlanCoordinates2,
        geodesic: true,
        strokeColor: "#FFFF00",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    flightPath2.setMap(map);

    const flightPlanCoordinates3 = [
        latLng,
        latLng2,
    ];
    const flightPath3 = new google.maps.Polyline({
        path: flightPlanCoordinates3,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    flightPath3.setMap(map);

    new google.maps.Marker({
      position: uluru,
      map: map,
    });
    new google.maps.Marker({
      position: latLng,
      map: map,
    });
    new google.maps.Marker({
        position: latLng1,
        map: map,
      });
      new google.maps.Marker({
        position: latLng2,
        map: map,
      });
}