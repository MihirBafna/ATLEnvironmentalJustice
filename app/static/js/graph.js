const GRAPH = document.getElementById("dataGraph");

var wealth_water = {
    label: 'Wealth - Water',
    backgroundColor: "rgba(0,0,128,1)",
    pointRadius: 1,
    borderColor: "#ffffff",
    data: [{x: data.features[8].properties.IncomePerCapita.substring(1,3)
            + data.features[8].properties.IncomePerCapita.substring(4),
            y: data.features[8].properties.TapWater}, // Fulton
        {x: data.features[19].properties.IncomePerCapita.substring(1,3)
            + data.features[19].properties.IncomePerCapita.substring(4),
        y: data.features[19].properties.TapWater}, // Barrow
        {x: data.features[2].properties.IncomePerCapita.substring(1,3)
            + data.features[2].properties.IncomePerCapita.substring(4),
            y: data.features[2].properties.TapWater}, // Bartow
        {x: data.features[9].properties.IncomePerCapita.substring(1,3)
            + data.features[9].properties.IncomePerCapita.substring(4),
            y: data.features[9].properties.TapWater}, // Carroll
        {x: data.features[3].properties.IncomePerCapita.substring(1,3)
            + data.features[3].properties.IncomePerCapita.substring(4),
            y: data.features[3].properties.TapWater}, // Cherokee
        {x: data.features[14].properties.IncomePerCapita.substring(1,3)
            + data.features[14].properties.IncomePerCapita.substring(4),
        y: data.features[14].properties.TapWater}, // Clayton
        {x: data.features[7].properties.IncomePerCapita.substring(1,3)
            + data.features[7].properties.IncomePerCapita.substring(4),
            y: data.features[7].properties.TapWater}, // Cobb
        {x: data.features[11].properties.IncomePerCapita.substring(1,3)
            + data.features[11].properties.IncomePerCapita.substring(4),
        y: data.features[11].properties.TapWater}, // Coweta
        {x: data.features[16].properties.IncomePerCapita.substring(1,3)
            + data.features[16].properties.IncomePerCapita.substring(4),
        y: data.features[16].properties.TapWater}, // Dekalb
        {x: data.features[10].properties.IncomePerCapita.substring(1,3)
            + data.features[10].properties.IncomePerCapita.substring(4),
        y: data.features[10].properties.TapWater}, // Douglas
        {x: data.features[12].properties.IncomePerCapita.substring(1,3)
            + data.features[12].properties.IncomePerCapita.substring(4),
        y: data.features[12].properties.TapWater}, // Fayette
        {x: data.features[4].properties.IncomePerCapita.substring(1,3)
            + data.features[4].properties.IncomePerCapita.substring(4),
            y: data.features[4].properties.TapWater}, // Forsyth
        {x: data.features[18].properties.IncomePerCapita.substring(1,3)
            + data.features[18].properties.IncomePerCapita.substring(4),
        y: data.features[18].properties.TapWater}, // Gwinnett
        {x: data.features[5].properties.IncomePerCapita.substring(1,3)
            + data.features[5].properties.IncomePerCapita.substring(4),
            y: data.features[5].properties.TapWater}, // Hall
        {x: data.features[15].properties.IncomePerCapita.substring(1,3)
            + data.features[15].properties.IncomePerCapita.substring(4),
        y: data.features[15].properties.TapWater}, // Henry
        {x: data.features[17].properties.IncomePerCapita.substring(1,3)
            + data.features[17].properties.IncomePerCapita.substring(4),
        y: data.features[17].properties.TapWater}, // Newton
        {x: data.features[6].properties.IncomePerCapita.substring(1,3)
            + data.features[6].properties.IncomePerCapita.substring(4),
            y: data.features[6].properties.TapWater}, // Paulding
        {x: data.features[0].properties.IncomePerCapita.substring(1,3)
            + data.features[0].properties.IncomePerCapita.substring(4),
            y: data.features[0].properties.TapWater}, // Rockdale
        {x: data.features[13].properties.IncomePerCapita.substring(1,3)
            + data.features[13].properties.IncomePerCapita.substring(4),
        y: data.features[13].properties.TapWater}, // Spalding
        {x: data.features[1].properties.IncomePerCapita.substring(1,3)
            + data.features[1].properties.IncomePerCapita.substring(4),
            y: data.features[1].properties.TapWater}, // Walton
        ],

    fill: false,
};

var race_water = {
    label: 'Race - Water',
    fill: false,
    backgroundColor: "rgba(0,0,256,1)",
    borderColor: "rgba(256,0,0,1)",
    data: [{x: data.features[8].properties.MinorityPercentage,
            y: data.features[8].properties.TapWater}, // Fulton
        {x: data.features[19].properties.MinorityPercentage,
            y: data.features[19].properties.TapWater}, // Barrow
        {x: data.features[2].properties.MinorityPercentage,
            y: data.features[2].properties.TapWater}, // Bartow
        {x: data.features[9].properties.MinorityPercentage,
            y: data.features[9].properties.TapWater}, // Carroll
        {x: data.features[3].properties.MinorityPercentage,
            y: data.features[3].properties.TapWater}, // Cherokee
        {x: data.features[14].properties.MinorityPercentage,
            y: data.features[14].properties.TapWater}, // Clayton
        {x: data.features[7].properties.MinorityPercentage,
            y: data.features[7].properties.TapWater}, // Cobb
        {x: data.features[11].properties.MinorityPercentage,
            y: data.features[11].properties.TapWater}, // Coweta
        {x: data.features[16].properties.MinorityPercentage,
            y: data.features[16].properties.TapWater}, // Dekalb
        {x: data.features[10].properties.MinorityPercentage,
            y: data.features[10].properties.TapWater}, // Douglas
        {x: data.features[12].properties.MinorityPercentage,
            y: data.features[12].properties.TapWater}, // Fayette
        {x: data.features[4].properties.MinorityPercentage,
            y: data.features[4].properties.TapWater}, // Forsyth
        {x: data.features[18].properties.MinorityPercentage,
            y: data.features[18].properties.TapWater}, // Gwinnett
        {x: data.features[5].properties.MinorityPercentage,
            y: data.features[5].properties.TapWater}, // Hall
        {x: data.features[15].properties.MinorityPercentage,
            y: data.features[15].properties.TapWater}, // Henry
        {x: data.features[17].properties.MinorityPercentage,
            y: data.features[17].properties.TapWater}, // Newton
        {x: data.features[6].properties.MinorityPercentage,
            y: data.features[6].properties.TapWater}, // Paulding
        {x: data.features[0].properties.MinorityPercentage,
            y: data.features[0].properties.TapWater}, // Rockdale
        {x: data.features[13].properties.MinorityPercentage,
            y: data.features[13].properties.TapWater}, // Spalding
        {x: data.features[1].properties.MinorityPercentage,
            y: data.features[1].properties.TapWater}, // Walton
],
};

var wealth_air = {
    label: 'Wealth - Air',
    fill: false,
    backgroundColor: "rgba(0,0,256,1)",
    borderColor: "rgba(256,0,0,1)",
    data: [{x: data.features[8].properties.IncomePerCapita.substring(1,3)
            + data.features[8].properties.IncomePerCapita.substring(4),
            y: data.features[8].properties.AirQuality}, // Fulton
            {x: data.features[19].properties.IncomePerCapita.substring(1,3)
            + data.features[19].properties.IncomePerCapita.substring(4),
            y: data.features[19].properties.AirQuality}, // Barrow
            {x: data.features[2].properties.IncomePerCapita.substring(1,3)
            + data.features[2].properties.IncomePerCapita.substring(4),
            y: data.features[2].properties.AirQuality}, // Bartow
            {x: data.features[9].properties.IncomePerCapita.substring(1,3)
                + data.features[9].properties.IncomePerCapita.substring(4),
            y: data.features[9].properties.AirQuality}, // Carroll
            {x: data.features[3].properties.IncomePerCapita.substring(1,3)
            + data.features[3].properties.IncomePerCapita.substring(4),
            y: data.features[3].properties.AirQuality}, // Cherokee
            {x: data.features[14].properties.IncomePerCapita.substring(1,3)
            + data.features[14].properties.IncomePerCapita.substring(4),
            y: data.features[14].properties.AirQuality}, // Clayton
            {x: data.features[7].properties.IncomePerCapita.substring(1,3)
            + data.features[7].properties.IncomePerCapita.substring(4),
            y: data.features[7].properties.AirQuality}, // Cobb
            {x: data.features[11].properties.IncomePerCapita.substring(1,3)
            + data.features[11].properties.IncomePerCapita.substring(4),
            y: data.features[11].properties.AirQuality}, // Coweta
            {x: data.features[16].properties.IncomePerCapita.substring(1,3)
            + data.features[16].properties.IncomePerCapita.substring(4),
            y: data.features[16].properties.AirQuality}, // Dekalb
            {x: data.features[10].properties.IncomePerCapita.substring(1,3)
            + data.features[10].properties.IncomePerCapita.substring(4),
            y: data.features[10].properties.AirQuality}, // Douglas
            {x: data.features[12].properties.IncomePerCapita.substring(1,3)
            + data.features[12].properties.IncomePerCapita.substring(4),
            y: data.features[12].properties.AirQuality}, // Fayette
            {x: data.features[4].properties.IncomePerCapita.substring(1,3)
            + data.features[4].properties.IncomePerCapita.substring(4),
            y: data.features[4].properties.AirQuality}, // Forsyth
            {x: data.features[18].properties.IncomePerCapita.substring(1,3)
            + data.features[18].properties.IncomePerCapita.substring(4),
            y: data.features[18].properties.AirQuality}, // Gwinnett
            {x: data.features[5].properties.IncomePerCapita.substring(1,3)
            + data.features[5].properties.IncomePerCapita.substring(4),
            y: data.features[5].properties.AirQuality}, // Hall
            {x: data.features[15].properties.IncomePerCapita.substring(1,3)
            + data.features[15].properties.IncomePerCapita.substring(4),
            y: data.features[15].properties.AirQuality}, // Henry
            {x: data.features[17].properties.IncomePerCapita.substring(1,3)
            + data.features[17].properties.IncomePerCapita.substring(4),
            y: data.features[17].properties.AirQuality}, // Newton
            {x: data.features[6].properties.IncomePerCapita.substring(1,3)
            + data.features[6].properties.IncomePerCapita.substring(4),
            y: data.features[6].properties.AirQuality}, // Paulding
            {x: data.features[0].properties.IncomePerCapita.substring(1,3)
                + data.features[0].properties.IncomePerCapita.substring(4),
                y: data.features[0].properties.AirQuality}, // Rockdale
            {x: data.features[13].properties.IncomePerCapita.substring(1,3)
            + data.features[13].properties.IncomePerCapita.substring(4),
            y: data.features[13].properties.AirQuality}, // Spalding
            {x: data.features[1].properties.IncomePerCapita.substring(1,3)
            + data.features[1].properties.IncomePerCapita.substring(4),
            y: data.features[1].properties.AirQuality}, // Walton
        ],

};

var race_air = {
    label: 'Race - Air',
    fill: false,
    backgroundColor: "rgba(0,0,256,1)",
    borderColor: "rgba(256,0,0,1)",
    data: [{x: data.features[8].properties.MinorityPercentage,
        y: data.features[8].properties.AirQuality}, // Fulton
    {x: data.features[19].properties.MinorityPercentage,
        y: data.features[19].properties.AirQuality}, // Barrow
    {x: data.features[2].properties.MinorityPercentage,
        y: data.features[2].properties.AirQuality}, // Bartow
    {x: data.features[9].properties.MinorityPercentage,
        y: data.features[9].properties.AirQuality}, // Carroll
    {x: data.features[3].properties.MinorityPercentage,
        y: data.features[3].properties.AirQuality}, // Cherokee
    {x: data.features[14].properties.MinorityPercentage,
        y: data.features[14].properties.AirQuality}, // Clayton
    {x: data.features[7].properties.MinorityPercentage,
        y: data.features[7].properties.AirQuality}, // Cobb
    {x: data.features[11].properties.MinorityPercentage,
        y: data.features[11].properties.AirQuality}, // Coweta
    {x: data.features[16].properties.MinorityPercentage,
        y: data.features[16].properties.AirQuality}, // Dekalb
    {x: data.features[10].properties.MinorityPercentage,
        y: data.features[10].properties.AirQuality}, // Douglas
    {x: data.features[12].properties.MinorityPercentage,
        y: data.features[12].properties.AirQuality}, // Fayette
    {x: data.features[4].properties.MinorityPercentage,
        y: data.features[4].properties.AirQuality}, // Forsyth
    {x: data.features[18].properties.MinorityPercentage,
        y: data.features[18].properties.AirQuality}, // Gwinnett
    {x: data.features[5].properties.MinorityPercentage,
        y: data.features[5].properties.AirQuality}, // Hall
    {x: data.features[15].properties.MinorityPercentage,
        y: data.features[15].properties.AirQuality}, // Henry
    {x: data.features[17].properties.MinorityPercentage,
        y: data.features[17].properties.AirQuality}, // Newton
    {x: data.features[6].properties.MinorityPercentage,
        y: data.features[6].properties.AirQuality}, // Paulding
    {x: data.features[0].properties.MinorityPercentage,
        y: data.features[0].properties.AirQuality}, // Rockdale
    {x: data.features[13].properties.MinorityPercentage,
        y: data.features[13].properties.AirQuality}, // Spalding
    {x: data.features[1].properties.MinorityPercentage,
        y: data.features[1].properties.AirQuality}, // Walton
],
};

var config = {
    type: "scatter",
    data: {
        datasets: [wealth_water]
    },
    options: {
        chartArea : {
            backgroundColor: "rgba(255,67,83,1)"
        },
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Scatter Plot'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            intersect: true
        },
        scales: {
            xAxes: {
                type: 'linear',
                position: 'bottom',
            },
            yAxes: {
                ticks: {
                    min: 16,
                    max: 27,
                },
            }
        }
    },

}


var graph = new Chart(GRAPH, config);


document.getElementById('wealth-water').addEventListener('click', function() {
    config.data.datasets.pop()
    config.data.datasets.push(wealth_water);
    
    graph.update();
});

document.getElementById('race-water').addEventListener('click', function() {
    config.data.datasets.pop()
    config.data.datasets.push(race_water);
    
    graph.update();
});

document.getElementById('wealth-air').addEventListener('click', function() {
    config.data.datasets.pop()
    config.data.datasets.push(wealth_air);
    
    graph.update();
});

document.getElementById('race-air').addEventListener('click', function() {
    config.data.datasets.pop()
    config.data.datasets.push(race_air);
    
    graph.update();
});
/*
<div style="width: 45%">
        <button id="wealth-water" class="btn btn-sm btn-secondary">Wealth vs Water Quality</button>
        <button id="race-water" class="btn btn-sm btn-secondary">Race vs Water Quality</button>
        <button id="wealth-air" class="btn btn-sm btn-secondary">Wealth vs Air Quality</button>
        <button id="race-air" class="btn btn-sm btn-secondary">Race vs Air Quality</button>
    </div>
     <!-- For the Chart Section for now -->
        <div style="width: 45%;">
            <canvas id="dataGraph" height="400" width="400" style="border:solid"></canvas>
        </div>
        <!--script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script-->
        <script src="https://cdnjs.cloudfare.com/ajax/libs/Chart/2.8.0/Chart.min.js"></script>
        <script src="../static/js/atlantacounties.js"></script>
        <script src="../static/js/graph.js"></script>
        
        

    <br><br></br>*/