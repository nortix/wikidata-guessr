//
// Minimap
//

function mminitialize() {
    mymap = L.map("miniMap");

    mymap.setView([52.4, 9.7], 12);

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(mymap);

    guess2 = L.marker([-999, -999]).addTo(mymap);
    guess2.setLatLng({lat: -999, lng: -999});

    mymap.on("click", function(e) {
        guess2.setLatLng(e.latlng);
        window.guessLatLng = e.latlng;
    })
};
