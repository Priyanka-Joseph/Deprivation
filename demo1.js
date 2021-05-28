$(function () { 
    $('#container1').highcharts({
    chart: {
        zoomtype: 'xy'
    },
    title: {
        text: 'Employment Domain Deprivation'
    },
    xAxis: [{
        categories: ['Blackpool', 'Knowsley', 'Middlesbrough', 'Hartlepool', 'Liverpool', 'South Tyneside','Kingston upon Hull', 'Redcar and Cleveland', 'St. Helens', 'Burnley','Blackburn and Darwen','Great Yarmouth', 'Sunderland','Hastings','Halton','Rochdale','Wirral','Thanet','Wolverhampton','Birmingham'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}%',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Score proportion Working Adults in 2019',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Score proportion Working Adults in 2015',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '{value}%',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    series: [{
        name: 'Employment Deprivation - 2019',
        type: 'column',
        yAxis: 1,
        data: [20.9,20.2,19.1,18.5,17.6,17.2,16.6,16.5,16.5,16.3,16.2,16.2,16.1,16.0,15.8,15.7,15.5,15.4,15.3],

    }, {
        name: 'Employment Deprivation - 2015',
        type: 'spline',
        data: [22.8,23.3,21.6,21.1,20.7,19.8,20.2,18.6,18.3,18.5,18.0,18.7,18.5,18.7,18.0,18.5,18.6,18.9,18.7,19.2],
    }]
});
});