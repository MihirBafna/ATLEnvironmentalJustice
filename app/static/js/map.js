$(document).ready(function () {
    $('body').fadeIn(1000);
    var map = L.map('mapid', { minZoom: 8, zoomControl: false, attributionControl: false }).setView([33.742612777346885, -84.38873291015625], 9); //georgia:32.709/-83.156 // Atlanta :-84.38873291015625,/ 33.742612777346885
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
// <b style="color:#3182bd">Air Quality Index:</b><b> ' + props.AirQuality +'</b>': 'Hover over a county'
    };

    info.addTo(map);


    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [10, 11, 13, 16, 18, 20],
            labels = [];

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(map);

    
    // Added Cloud Markers to mark locations of Air Quality Testing Locations
    var AirQualityIcon = L.icon({
        iconUrl : "../static/img/air_cloud.png",
        iconSize: [32,32]
    }); 

    var m_gainseville = L.marker([34.2979, -83.8241], {icon: AirQualityIcon}).bindPopup("Gainesville "),
        m_gwinnetttech = L.marker([33.9628, -84.0676], {icon: AirQualityIcon}).bindPopup("Gwinnett Tech"),
        m_georgiatech = L.marker([33.7756, -84.3963], {icon: AirQualityIcon}).bindPopup("Georgia Tech"),
        m_nationalguard = L.marker([33.7260405,-84.3602911], {icon: AirQualityIcon}).bindPopup("Atlanta National Guard Station"),
        m_georgiaperim = L.marker([33.6892844,-84.2774477], {icon: AirQualityIcon}).bindPopup("Georgia Perimeter College"),
        m_mcdonough = L.marker([33.4473, -84.1469], {icon: AirQualityIcon}).bindPopup("McDonough"),
        m_epaoffice = L.marker([33.1740036,-84.4425146], {icon: AirQualityIcon}).bindPopup("EPA Office"),
        m_douglasville = L.marker([33.7515, -84.7477], {icon: AirQualityIcon}).bindPopup("Douglasville"),
        m_kennesaw = L.marker([34.0234, -84.6155], {icon: AirQualityIcon}).bindPopup("Kennesaw"),
        m_athens = L.marker([33.9285546,-83.3643441], {icon: AirQualityIcon}).bindPopup("Athens Poultry Research Lab"),
        m_foodcenter = L.marker([33.583955,-84.068942], {icon: AirQualityIcon}).bindPopup("Food Center"),
        m_forestry = L.marker([34.3777014,-84.0579227], {icon: AirQualityIcon}).bindPopup("Georgia Forestry Commision");

    var airquality_markers = L.layerGroup([m_gainseville, m_gwinnetttech, m_georgiatech, m_georgiaperim,
                       m_nationalguard, m_mcdonough, m_epaoffice, m_douglasville,
                       m_kennesaw, m_athens, m_foodcenter, m_forestry]);

    var overlayMaps = {
        "Air Quality": airquality_markers
    };

    L.control.layers(null, overlayMaps).addTo(map);

    
    

});
