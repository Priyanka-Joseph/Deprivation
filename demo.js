$(function () { 
    $('#container1').highcharts({
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Income Domain'
    },
    xAxis: {
        categories: ['Decile 1', 'Decile 2', 'Decile 3', 'Decile 4', 'Decile 5','Decile 6','Decile 7','Decile 8','Decile 9','Decile 10'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Income (Percentage)',
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

    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 2019',
        data: [33.4,23.2,17.8,14.0,11.1,8.9,7.0,5.6,4.2,2.6]
    }, {
        name: 'Year 2015',
        data: [36.9,26.2,20.2,16.0,12.7,10.1,8.1,6.4,4.9,3.1]
    }]
});
});



$(function () { 
    $('#container').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'The 20 local authority districts with the highest proportions of income deprivation'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            title: {
                text: 'The 20 local authority districts with the highest proportions of Income Deprivation'
                    },
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Local Authority District'
        }
    },
    legend: {
        enabled: false
    },
        tooltip: {
            pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                   shared: true
        },
    series: [{
        name: 'Local Authority District',
        data: [
            ['Middlesbrough', 25.1],
            ['Knowsley', 25.1],
            ['Blackpool', 24.7],
            ['Liverpool', 23.5],
            ['Hartlepool', 22.8],
            ['Kingston upon Hull', 22.7],
            ['Birmingham', 22.2],
            ['Manchester', 21.9],
            ['Sandwell', 21.5],
            ['Blackburn with Darwen', 21.2],
            ['Wolverhampton', 21.1],
            ['South Tyneside', 20.6],
            ['Burnley', 20.3],
            ['Hastings', 20.2],
            ['Rochdale', 20.1],
            ['Walsall', 20.0],
            ['Nottingham', 19.9],
            ['Leicester', 19.6],
            ['Hackney', 19.6],
            ['Barking and Dagenham', 19.4]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
});