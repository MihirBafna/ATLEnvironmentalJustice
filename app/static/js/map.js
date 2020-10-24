var map = L.map('mapid', { minZoom: 8, zoomControl: false, attributionControl: false }).setView([33.742612777346885, -84.38873291015625], 9); //georgia:32.709/-83.156 // Atlanta :-84.38873291015625,/ 33.742612777346885
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}@2x?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWloaXJiYWZuYSIsImEiOiJja2dsbGJkOW8wMng0MnJueXRnbGJ2YzZiIn0.Dv_yc4MNQCvKKt_ZEZ8aSw'
}).addTo(map);

var geojson;



function style(feature) {
    return {
        // fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: '#3182bd',
        fillOpacity: 0.3
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#3182bd',
        dashArray: '',
        fillOpacity: 0.8
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function zoomToFeature(e) {
    geojson.resetStyle(e.target);
    highlightFeature(e);
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(data, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

// $.getJSON("../static/atlantacounties.json", function (data) {

//     geojson = data;
//     console.log(data)
// }).done(function (data) {
//     L.geoJSON(geojson, {
//         onEachFeature: onEachFeature
//     }).addTo(map);
// });