$(document).ready(function() {

    var map = L.map('map');
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    map.locate({setView: true, maxZoom: 12, enableHighAccuracy: true});
    function onLocationFound(e) {
      L.marker(e.latlng).addTo(map).bindPopup("Coordenadas: " + e.latlng.toString()).openPopup();
       //L.circle(e.latlng, circulo).addTo(map);
    }
    map.on('locationfound', onLocationFound);

    var popup = L.popup();
    function onMapClick(e) {
       popup.setLatLng(e.latlng).setContent("Ubicación: " + e.latlng.toString()).openOn(map);
    }
    map.on('click', onMapClick);

});
