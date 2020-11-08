$(document).ready(function () {
    var geojson;
    $(".legend").css({ 'border': '#3182bd solid 5px' })

    var map = L.map('mapid', { minZoom: 8, zoomControl: false, attributionControl: false }).setView([33.742612777346885, -84.38873291015625], 9); //georgia:32.709/-83.156 // Atlanta :-84.38873291015625,/ 33.742612777346885
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/dark-v10',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWloaXJiYWZuYSIsImEiOiJja2dsbGJkOW8wMng0MnJueXRnbGJ2YzZiIn0.Dv_yc4MNQCvKKt_ZEZ8aSw'
    }).addTo(map);
    initialize();

    function contentToHtml2(text) {
        return text
        .split('\n\n')
        .map(paragraph => `<p class="county-info">${paragraph}</p>`)
        .join('')
    }

    function setCountyInfo(county) {
        fileName = "../static/txt/counties/" + county.toLowerCase() + ".txt";
        $("#modal-name").text(county);
        fetch(fileName)
            .then(response => response.text())
            .then(data => {
                console.log(fileName);
                document.getElementById("county-script").innerHTML = '<p style="font-family: Helvetica Neue; padding:2%; text-align: left;"'+contentToHtml2(data)+'</p>';
        });

    }


    function initialize() {
        if (mode == "water") {
            $(".info").css({ 'border': '#3182bd solid 5px' })
            $(".legend").css({ 'border': '#3182bd solid 5px' })
            $("#radio2").prop("checked", true);
        } else if (mode == "air") {
            $(".info").css({ 'border': '#df65b0 solid 5px' })
            $(".legend").css({ 'border': '#df65b0 solid 5px' })
            $("#radio3").prop("checked", true);
        } else if (mode == "wealth") {
            $(".info").css({ 'border': '#2ca25f solid 5px' })
            $(".legend").css({ 'border': '#2ca25fsolid 5px' })
            $("#radio4").prop("checked", true);
        } else if (mode == "race") {
            $(".info").css({ 'border': '#3182bd solid 5px' })
            $(".legend").css({ 'border': '#3182bd solid 5px' })
            $("#radio5").prop("checked", true);
        }else {
            $(".info").css({ 'border': '#3182bd solid 5px' })
            $(".legend").css({ 'border': '#3182bd solid 5px' })
            $("#radio1").prop("checked", true);
        }
    }

    function getColor(d) {
        if (mode == "water") {
            return d > 19 ? '#084594' :
                d > 16 ? '#2171b5' :
                    d > 13 ? '#4292c6' :
                        d > 11 ? '#6baed6' :
                            '#9ecae1';
        } else if (mode == "air") {
            return d > 24 ? '#91003f' :
                d > 21 ? '#ce1256' :
                    d > 20 ? '#e7298a' :
                        d > 17 ? '#df65b0' :
                            '#c994c7';
        } else if (mode == "wealth") {
            return d > 33 ? '#238b45' :
                d > 29 ? '#41ae76' :
                    d > 24 ? '#66c2a4' :
                        d > 21 ? '#99d8c9' :
                            '#ccece6';
        }
    }

    function style(feature) {
        if (mode == "water") {
            return {
                fillColor: getColor(feature.properties.Contaminants),
                weight: 2,
                opacity: 1,
                color: '#FFF',
                dashArray: '3',
                fillOpacity: 0.7
            };
        } else if (mode == "air") {
            return {
                fillColor: getColor(feature.properties.AirQuality),
                weight: 2,
                opacity: 1,
                color: '#FFF',
                dashArray: '3',
                fillOpacity: 0.7
            };
        } else if (mode == "wealth") {
            return {
                fillColor: getColor(feature.properties.IncomePerCapita.substring(1,3)),
                weight: 2,
                opacity: 1,
                color: '#FFF',
                dashArray: '3',
                fillOpacity: 0.7
            };
        }else {
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

        setCountyInfo(layer.feature.properties.NAME);


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
        $('#modal').modal('show');
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
        initialize();
        return this._div;
    };

    // method that we will use to update the control based on feature properties passed
    info.update = function (props) {
        if (mode == "water") {
            this._div.innerHTML = '<h4 style="font: 16px">Tap Water Quality</h4>' + (props ?
                '<b style="color:#3182bd">County: </b><b>' + props.NAME + '</b><br/>' + '<b style="color:#3182bd">EWG Water Rating:</b><b> ' + props.TapWater + '<br /><b style="color:#3182bd">Contaminants Detected:</b><b> ' + props.Contaminants
                : '<b style="color:#3182bd"> Hover/Click on a county </b>');
        } else if (mode == "air") {
            this._div.innerHTML = '<h4 style="font: 16px">Air Quality</h4>' + (props ?
                '<b style="color:#df65b0">County: </b><b>' + props.NAME + '</b><br/>' + '<b style="color:#df65b0">Air Quality Index:</b><b> ' + props.AirQuality : '<b style="color:#df65b0"> Hover/Click on a county </b>');
        } else if (mode == "wealth") {
            this._div.innerHTML = '<h4 style="font: 16px">Wealth</h4>' + (props ?
                '<b style="color:#2ca25f">County: </b><b>' + props.NAME + '</b><br/>' + '<b style="color:#2ca25f">Income Per Capita:</b><b> ' + props.IncomePerCapita : '<b style="color:#2ca25f"> Hover/Click on a county </b>');
        }
        else {
            this._div.innerHTML = '<h4 style="font: 16px">Info Panel</h4>' + '<b style="color:#3182bd">Select a mode below...</b>';
        }
    };

    info.addTo(map);


    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'legend'),
        this.update();
        initialize();
        return this._div;
    };

    legend.update = function () {
        if (mode == "water") {
            var grades = [10, 11, 13, 16, 18, 20],
                labels = [];

            // loop through our density intervals and generate a label with a colored square for each interval
            for (var i = 0; i < grades.length; i++) {
                this._div.innerHTML +=
                    '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                    grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
            }
        } else if (mode == "air") {
            var grades = [16, 17, 20, 21, 24],
                labels = [];

            // loop through our density intervals and generate a label with a colored square for each interval
            for (var i = 0; i < grades.length; i++) {
                this._div.innerHTML +=
                    '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                    grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
            }
        } else if (mode == "wealth") {
            var grades = ["$18,000", "$22,000", "$25,000", "$30,000", "$35,000"],
                labels = [];

            // loop through our density intervals and generate a label with a colored square for each interval
            for (var i = 0; i < grades.length; i++) {
                this._div.innerHTML +=
                    '<i style="background:' + getColor(grades[i].substring(1,3)) + '"></i> ' +
                    grades[i] + (grades[i + 1] ? ' &ndash; ' + grades[i + 1] + '<br>' : '+');
            }
        }
    }

    legend.addTo(map);

    
    // Added Cloud Markers to mark locations of Air Quality Testing Locations
    var AirQualityIcon = L.icon({
        iconUrl : "../static/img/air_cloud.png",
        iconSize: [32,32]
    }); 

    var m_gainseville = L.marker([34.2979, -83.8241], { icon: AirQualityIcon }).bindPopup("Gainesville "),
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
    if (mode == "air") {
        airquality_markers.addTo(map);
    }


    
    

});
