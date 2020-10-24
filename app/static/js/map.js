var mymap = L.map('mapid').setView([32.8174, -83.4450], 8); //georgia:32.709/-83.156
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}@2x?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWloaXJiYWZuYSIsImEiOiJja2dsbGJkOW8wMng0MnJueXRnbGJ2YzZiIn0.Dv_yc4MNQCvKKt_ZEZ8aSw'
}).addTo(mymap);

var geojson;
$.getJSON("../static/atlantacounties.json", function (data) {

    geojson = data;
    console.log(data)
}) .done(function (data) { 
    L.geoJSON(data).addTo(mymap);
});


