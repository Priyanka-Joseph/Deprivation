$(function () { 
    $('#container').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Local Authority Districts with most deprived 10 percent of Neighbourhoods Nationally in IMD -2019 and IMD-2015'
    },
    xAxis: {
        categories: ['Middlesbrough', 'Liverpool', 'Knowsley', 'Kingston upon hull', 'Manchester','Blackpool','Birmingham','Burnley','Oldham','Halton','Salford','Rochdale','Gateshead','Bumley','Halton','Blackburn with Darwen','Mansfield','Walsall','Rossendale','oldham']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'IMD',
            align: 'high'
        },
        labels: {
            overflow: 'percentage'
        }
    },
    tooltip: {
        pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
               shared: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'IMD -2019',
        data: [48.8,48.7,46.9,45.2,43.3,41.5,41.3,38.3,36.3,36.2,33.5,32.1,31.6,30.8,30.5,30.2,30.0,29.9]
    }, {
        name: 'IMD-2015',
        data: [48.8,45.0,45.9,45.2,40.8,38.3,39.6,33.3,30.8,32.8,32.6,30.2,26.6,28.1,33.5,22.7,29.2,30.2]
    }]
});
});