$(document).ready(function () {
    $('body').fadeIn(1000);
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
    var mode = "water";

    function getColor(d) {
        if (mode == "water") {
            return d > 19 ? '#084594' :
                d > 16 ? '#2171b5' :
                    d > 13 ? '#4292c6' :
                        d > 11 ? '#6baed6' :
                            '#9ecae1';
        }
    }

    function style(feature) {
        if (mode == "water") {
            return {
                fillColor: getColor(feature.properties.Contaminants, mode),
                weight: 2,
                opacity: 1,
                color: '#FFF',
                dashArray: '3',
                fillOpacity: 0.7
            };
        } else {
            return {
                fillColor: "#3182bd",
                weight: 2,
                opacity: 1,
                color: '#3182bd',
                fillOpacity: 0.3
            };
        }
    }

    function highlightFeature(e) {
        var layer = e.target;
        layer.setStyle({
            fillColor: "#FFF",
            weight: 5,
            color: '#FFF',
            dashArray: '',
            fillOpacity: 0.8
        });
        info.update(layer.feature.properties);


        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
    }

    function resetHighlight(e) {
        geojson.resetStyle(e.target);
        info.update();
    }

    function zoomToFeature(e) {
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

    var info = L.control();

    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };

    // method that we will use to update the control based on feature properties passed
    info.update = function (props) {
        if (mode == "water") {
            this._div.innerHTML = '<h4 style="font: 16px">Tap Water Quality</h4>' + (props ?
                '<b style="color:#3182bd">County: </b><b>' + props.NAME + '</b><br/>' + '<b style="color:#3182bd">EWG Water Rating:</b><b> ' + props.TapWater + '<br /><b style="color:#3182bd">Contaminants Detected:</b><b> ' + props.Contaminants
                : 'Hover over a state');
        } else {
            this._div.innerHTML = '<h4 style="font: 16px">Info Panel</h4>' + '<b style="color:#3182bd">Select a mode below...</b>';
        }

    };

    info.addTo(map);

    L.marker([33.742612777346885, -84.38873291015625]).addTo(map);

});
