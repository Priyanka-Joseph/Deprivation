$(function () { 
    $('#container').highcharts({
    chart: {
        type: 'columnrange'
    },
    title: {
        text: 'Indoor and Outdoor Subdomain Deprivation by Deciles'
    },

    xAxis: {
        categories: ['Decile 1', 'Decile 2', 'Decile 3', 'Decile 4', 'Decile 5', 'Decile 6','Decile 7', 'Decile 8', 'Decile 9', 'Decile 10']
    },

    yAxis: {
        title: {
            text: 'Indoor and Outdoor subdomain Average Score ( % )'
        }
    },

    tooltip: {
        valueSuffix: '%'
    },

    plotOptions: {
        columnrange: {
            dataLabels: {
                enabled: true,
                format: '{y}%'
            }
        }
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'Average Score',
        data: [
            [0.5, 1.84],
            [0.85, 0.90],
            [0.56, 0.52],
            [0.33, 0.24],
            [0.10, -0.030],
            [0.10, -0.17],
            [0.31, -0.36],
            [0.55, -0.58],
            [0.72, -0.84],
            [0.98, -1.30]
        ]
    }]
    });
});
