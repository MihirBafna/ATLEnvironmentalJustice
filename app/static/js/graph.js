const WW_COLOR = "rgba(45, 187, 235,1)";
const RW_COLOR = "rgba(255, 92, 10,1)";
const WA_COLOR = "rgba(45, 186, 91,1)";
const RA_COLOR = "rgba(255, 54, 174,1)";

const GRAPH = document.getElementById("dataGraph");

const indexdata = {
    label: 'Counties Ranked',
    backgroundColor: "#ef3b2c",
    trendlineLinear: {
        style: "rgb(43 ,66 ,255, 0.3)",
        lineStyle: "dotted|solid",
        width: 2
    },
    fill: false,
    data: [
    ],
};

var airqualities = [];
var waterqualities=[];
var monies = [];

for(var i=0;i<20;i++){
    airqualities.push(parseInt(data.features[i].properties.AirQuality))
    waterqualities.push(parseInt(data.features[i].properties.Contaminants))
    monies.push(parseInt(data.features[i].properties.IncomePerCapita.substring(1, 3)));
}
// console.log(Math.min(airqualities),Math.max(air))
var reglist = []
for (var i = 0; i < 20; i++) {
    var env = (parseInt(parseInt(data.features[i].properties.AirQuality)- Math.min.apply(Math,airqualities))/(Math.max.apply(Math,airqualities)-Math.min.apply(Math,airqualities))+ (data.features[i].properties.Contaminants-Math.min.apply(Math,waterqualities))/(Math.max.apply(Math,waterqualities)-Math.min.apply(Math,waterqualities)))/2;
    var soc = (parseInt(data.features[i].properties.IncomePerCapita.substring(1, 3)) - Math.min.apply(Math, monies)) / (Math.max.apply(Math, monies) - Math.min.apply(Math, monies));
    sc = Math.round((soc + Number.EPSILON) * 100) / 100;
    indexdata.data.push({ x: 1-env.toFixed(2), y: sc.toFixed(2), name: data.features[i].properties.NAME });
    var list = [1 - env.toFixed(2), sc.toFixed(2)];
    reglist.push(list);
}


const wealth_wat = {
    label: 'Counties',
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
    label: 'Counties',
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
    label: 'Counties',
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
    label: 'Counties',
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
    label: "",
    showLine: true,
    fill: false, 
    backgroundColor: "rgb(0,0,0,0)",
    pointBorderColor: "rgb(0,0,0,0)",
    borderColor: WW_COLOR,
    data: [],
};

var rwReg = {
    label: "",
    showLine: true,
    fill: false, 
    backgroundColor: "rgb(0,0,0,0)",
    pointBorderColor: "rgb(0,0,0,0)",
    borderColor: RW_COLOR,
    data: [],
};

var waReg = {
    label: "",
    showLine: true,
    fill: false, 
    backgroundColor: "rgb(0,0,0,0)",
    pointBorderColor: "rgb(0,0,0,0)",
    borderColor: WA_COLOR,
    data: [],
};

var raReg = {
    label: "",
    showLine: true,
    fill: false, 
    backgroundColor: "rgb(0,0,0,0)",
    pointBorderColor: "rgb(0,0,0,0)",
    borderColor: RA_COLOR,
    data: [],
};

var indexReg = {
    label: "",
    showLine: true,
    fill: false, 
    backgroundColor: "rgb(0,0,0,0)",
    pointBorderColor: "rgb(0,0,0,0)",
    borderColor: "#ef3b2c",
    data: [],
};


var tempList = [wealth_wat,race_wat,wealth_air,race_air,indexdata];
var outputList = [wwReg,rwReg,waReg,raReg,indexReg];
for (let index = 0; index < tempList.length; index++) {
    var n = tempList[index].data.length;
    var avgX = 0;
    var avgY = 0;
    var numerator = 0;
    var denom = 0;
    for (let i = 0; i < n; i++) {
        var xVal, yVal;
        if(typeof tempList[index].data[i].x == "string") {
            xVal = parseFloat(tempList[index].data[i].x);
        }
        else {
            xVal = tempList[index].data[i].x;
        }

        if(typeof tempList[index].data[i].y == "string") {
            yVal = parseFloat(tempList[index].data[i].y);
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
    if (index == 4) {
        let xVal1 = 0;
        let yVal1 = avgY + m * (xVal1 - avgX);
        let xVal2 = 1.0;
        let yVal2 = avgY + m * (xVal2 - avgX);
        outputList[index].data.push({x: xVal1, y: yVal1});
        outputList[index].data.push({x: xVal2, y: yVal2});
    }
    else if(index % 2 == 0) {
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
    pointRadius: 5,
    pointHoverRadius: 6,
    options: {
        chartArea : {
            backgroundColor: "#084594"
        },
        responsive: true,
        title: {
            display: true,
            text: ''
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


var indexconfig = {
    type: "scatter",
    data: {
        datasets: [indexdata,indexReg],
        radius: 7,
        hoverRadius: 8,
    },

    options: {
        chartArea: {
            backgroundColor: ""
        },
        responsive: true,
        title: {
            display: true,
            text: 'Socioeconomic Factors vs Environmental Factors'
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    var label = " " + data.datasets[0].data[tooltipItem.index].name + " : (" + data.datasets[0].data[tooltipItem.index].x + "," + data.datasets[0].data[tooltipItem.index].y+")";
                    return label;
                }
            }
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
                    labelString: 'Environmental Factors',
                },
                ticks: {
                    min:0,
                    max:1.0,
                },
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Socioeconomic Factors',
                },
                ticks: {
                    min: 0,
                    max: 1.0,
                },
            }]
        }
    },

}



Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontSize = 16; 
Chart.defaults.global.elements.point.radius = 5;
Chart.defaults.global.elements.point.hoverRadius = 7;


var graph = new Chart(GRAPH, indexconfig);
document.getElementById('atlenvjustice').addEventListener('click', function () {
    graph.destroy();
    // indexconfig.data.datasets.push(indexreg);
    graph = new Chart(GRAPH, indexconfig);
});

document.getElementById('wealth-water').addEventListener('click', function() {
    graph.destroy();
    config.data.datasets.pop();
    config.data.datasets.pop();
    config.options.title.text = "Wealth vs Water Quality";
    config.options.scales.xAxes[0].scaleLabel.labelString = "Income Per Capita ($)";
    config.options.scales.yAxes[0].scaleLabel.labelString = "Water Quality (# of Contaminants)";
    // Ticks
    config.options.scales.yAxes[0].ticks.min = 4;
    config.options.scales.yAxes[0].ticks.max = 13;
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
    config.options.scales.xAxes[0].scaleLabel.labelString = "Race (Minority %)";
    config.options.scales.yAxes[0].scaleLabel.labelString = "Water Quality (# of Contaminants)";

    // Ticks 
    config.options.scales.yAxes[0].ticks.min = 4;
    config.options.scales.yAxes[0].ticks.max = 13;
    config.options.scales.xAxes[0].ticks.min = 20;
    config.options.scales.xAxes[0].ticks.max = 95;

    config.data.datasets.push(race_wat);
    config.data.datasets.push(rwReg);

    graph = new Chart(GRAPH, config);
});

document.getElementById('wealth-air').addEventListener('click', function() {
    graph.destroy();
    config.data.datasets.pop();
    config.data.datasets.pop();
    config.options.title.text = "Wealth vs Air Quality";
    config.options.scales.xAxes[0].scaleLabel.labelString = "Income Per Capita ($)";
    config.options.scales.yAxes[0].scaleLabel.labelString = "Air Quality Index";

    // Ticks
    
    config.options.scales.yAxes[0].ticks.min = 8;
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
    config.options.scales.xAxes[0].scaleLabel.labelString = "Race (Minority %)";
    config.options.scales.yAxes[0].scaleLabel.labelString = "Air Quality Index";

    // Ticks
    config.options.scales.yAxes[0].ticks.min = 8;
    config.options.scales.yAxes[0].ticks.max = 28;
    config.options.scales.xAxes[0].ticks.min = 20;
    config.options.scales.xAxes[0].ticks.max = 100; 
    config.data.datasets.push(race_air);
    config.data.datasets.push(raReg);


    graph = new Chart(GRAPH, config);
});