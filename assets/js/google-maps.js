function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 40.4165, lng: -3.70256};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 10,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Madrid, España' // Title Location
    });
}
