const WW_COLOR = "rgba(0,191,255,1)";
const RW_COLOR = "rgba(148,0,211,1)";
const WA_COLOR = "rgba(50,205,50,1)";
const RA_COLOR = "rgba(255,99,71,1)";

const GRAPH = document.getElementById("dataGraph");

const wealth_wat = {
    label: 'Wealth - Water',
    backgroundColor: WW_COLOR,
    fill: false,
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
};

const race_wat = {
    label: 'Race - Water',
    fill: false,
    backgroundColor: RW_COLOR,
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

const wealth_air = {
    label: 'Wealth - Air',
    fill: false,
    backgroundColor: WA_COLOR,
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

const race_air = {
    label: 'Race - Air',
    fill: false,
    backgroundColor: RA_COLOR,
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

// Wealth Water Regression
var wwReg = {
    label: "Wealth vs Water Regression",
    showLine: true,
    fill: false, 
    backgroundColor: "rgb(0,0,0,0)",
    pointBorderColor: "rgb(0,0,0,0)",
    borderColor: WW_COLOR,
    data: [],
};

var rwReg = {
    label: "Race vs Water Regression",
    showLine: true,
    fill: false, 
    backgroundColor: "rgb(0,0,0,0)",
    pointBorderColor: "rgb(0,0,0,0)",
    borderColor: RW_COLOR,
    data: [],
};

var waReg = {
    label: "Wealth vs AirRegression",
    showLine: true,
    fill: false, 
    backgroundColor: "rgb(0,0,0,0)",
    pointBorderColor: "rgb(0,0,0,0)",
    borderColor: WA_COLOR,
    data: [],
};

var raReg = {
    label: "Race vs Air Regression",
    showLine: true,
    fill: false, 
    backgroundColor: "rgb(0,0,0,0)",
    pointBorderColor: "rgb(0,0,0,0)",
    borderColor: RA_COLOR,
    data: [],
};



var tempList = [wealth_wat,race_wat,wealth_air,race_air];
var outputList = [wwReg,rwReg,waReg,raReg];
for (let index = 0; index < tempList.length; index++) {
    var n = tempList[index].data.length;
    var avgX = 0;
    var avgY = 0;
    var numerator = 0;
    var denom = 0;
    for (let i = 0; i < n; i++) {
        var xVal, yVal;
        if(typeof tempList[index].data[i].x == "string") {
            xVal = parseInt(tempList[index].data[i].x,10);
        }
        else {
            xVal = tempList[index].data[i].x;
        }

        if(typeof tempList[index].data[i].y == "string") {
            yVal = parseInt(tempList[index].data[i].y,10);
        }
        else {
            yVal = tempList[index].data[i].y;
        }
        numerator +=  xVal * yVal;
        denom += xVal * xVal;
        avgX += xVal;
        avgY += yVal;
    }
    
    avgX /= n;
    avgY /= n;
    numerator -= n * avgX * avgY;
    denom -= n * avgX * avgX;

    m = numerator / denom;

    if(index % 2 == 0) {
        let xVal1 = 15000;
        let yVal1 = avgY + m * (xVal1 - avgX);
        let xVal2 = 40000;
        let yVal2 = avgY + m * (xVal2 - avgX);;
        outputList[index].data.push({x: xVal1, y: yVal1})
        outputList[index].data.push({x: xVal2, y: yVal2})
    }
    else {
        let xVal1 = 20;
        let yVal1 = avgY + m * (xVal1 - avgX);
        let xVal2 = 100;
        let yVal2 = avgY + m * (xVal2 - avgX);;
        outputList[index].data.push({x: xVal1, y: yVal1});
        outputList[index].data.push({x: xVal2, y: yVal2});
    }
    
    
}

// Options for Chart
var config = {
    type: "scatter",
    data: {
        datasets: [wealth_wat,wwReg],
    },
    pointRadius: 4,
    pointHoverRadius: 5,
    options: {
        chartArea : {
            backgroundColor: "rgba(255,67,83,1)"
        },
        responsive: true,
        title: {
            display: true,
            text: 'Wealth vs Water Quality'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            intersect: true
        },
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
                scaleLabel: {
                    display: true,
                    labelString: 'GDP Per Capita',
                },
                ticks: {
                    
                },
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Water Quality',
                },
                ticks: {
                
                },
            }]
        }
    },

}
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontSize = 16;


var graph = new Chart(GRAPH, config);


document.getElementById('wealth-water').addEventListener('click', function() {
    graph.destroy();
    config.data.datasets.pop();
    config.data.datasets.pop();
    config.options.title.text = "Wealth vs Water Quality";
    config.options.scales.xAxes[0].scaleLabel.labelString = "GDP Per Capita";
    config.options.scales.yAxes[0].scaleLabel.labelString = "Water Quality";
    
    // Ticks
    config.options.scales.yAxes[0].ticks.min = 8;
    config.options.scales.yAxes[0].ticks.max = 11;
    config.options.scales.xAxes[0].ticks.min = 15000;
    config.options.scales.xAxes[0].ticks.max = 40000;


    config.data.datasets.push(wealth_wat);
    config.data.datasets.push(wwReg);
    graph = new Chart(GRAPH, config);
});

document.getElementById('race-water').addEventListener('click', function() {
    graph.destroy();
    config.data.datasets.pop();
    config.data.datasets.pop();
    config.options.title.text = "Race vs Water Quality";
    config.options.scales.xAxes[0].scaleLabel.labelString = "Minority Percentage";
    config.options.scales.yAxes[0].scaleLabel.labelString = "Water Quality";

    // Ticks 
    config.options.scales.yAxes[0].ticks.min = 8;
    config.options.scales.yAxes[0].ticks.max = 11;
    config.options.scales.xAxes[0].ticks.min = 20;
    config.options.scales.xAxes[0].ticks.max = 100;

    config.data.datasets.push(race_wat);
    config.data.datasets.push(rwReg);

    graph = new Chart(GRAPH, config);
});

document.getElementById('wealth-air').addEventListener('click', function() {
    graph.destroy();
    config.data.datasets.pop();
    config.data.datasets.pop();
    config.options.title.text = "Wealth vs Air Quality";
    config.options.scales.xAxes[0].scaleLabel.labelString = "GDP Per Capita";
    config.options.scales.yAxes[0].scaleLabel.labelString = "Air Quality";

    // Ticks
    
    config.options.scales.yAxes[0].ticks.min = 16;
    config.options.scales.yAxes[0].ticks.max = 28;
    config.options.scales.xAxes[0].ticks.min = 15000;
    config.options.scales.xAxes[0].ticks.max = 40000;

    config.data.datasets.push(wealth_air);
    config.data.datasets.push(waReg);
    
    graph = new Chart(GRAPH, config);
});

document.getElementById('race-air').addEventListener('click', function() {
    graph.destroy();
    config.data.datasets.pop();
    config.data.datasets.pop();
    config.options.title.text = "Race vs Air Quality";
    config.options.scales.xAxes[0].scaleLabel.labelString = "Minority Percentage";
    config.options.scales.yAxes[0].scaleLabel.labelString = "Air Quality";

    // Ticks
   config.options.scales.yAxes[0].ticks.min = 16;
    config.options.scales.yAxes[0].ticks.max = 28;
    config.options.scales.xAxes[0].ticks.min = 20;
    config.options.scales.xAxes[0].ticks.max = 100;

    config.data.datasets.push(race_air);
    config.data.datasets.push(raReg);


    graph = new Chart(GRAPH, config);
});