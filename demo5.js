$(function () { 
    $('#container').highcharts({
    chart: {
        type: 'areaspline'
    },
        title: {
            text: 'Housing and Services domain for the most deprived areas for the year 2015 and 2019'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'Liverpool city',
                'Tees Valley	',
                'Birmingham',
                'Humber',
                'Manchester',
                'Black Country',
                'SHeffield',
                'Lancashire',
                'Leeds',
                'North Eastern',
                'Lincolnshire', 
                'Derby', 
                'Nottingham',
                'Leicester',
                'Staffordshire',
                'Coventry',
                'West of England',
                'Northamptonshire',
                'New Anglia',
                'Solent',
                'London',
                'Warrington',
                'South East',
                'South West',
                'Corn wall',
                'Midlands',
                'Worcestershire',
                'The Marches',
                'Cambridge',
                'Gloucestershire',
                'York',
                'Dorset',
                'Coast of Capital',
                'Swindon',
                'Oxfordshire',
                'Thames Valley',
                'Hertfordshire',
                'Buckinghamshire'
            ],
            plotBands: [{ // visualize the weekend
                from: 4.5,
                to: 6.5,
                color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            title: {
                text: 'Barriers to Housing & Services Domain'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: '%'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: '2019',
            data: [1.5,3.2,25.2,9.9,4.4,2.7,6.2,4.7,2.4,7.7,9.0,6.7,10.5,6.4,11.2,9.4,5.8,9.0,15.2,2.8,34.2,3.8,7.6,11.1,18.5,19.3,19.1,29.4,11.3,6.2,12.9,24.1,12.6,19.4,5.6,6.6,9.8,12.3]
        }, {
            name: '2015',
            data: [0.5,1.2,25.2,6.9,7.4,6.9,4.2,1.7,2.4,3.7,10.0,3.7,12.5,3.4,4.2,8.4,2.8,9.0,15.2,2.8,28.8,3.8,7.6,11.1,23.5,12.3,17.9,25.7,14.9,8.8,14.4,10.0,11.6,13.4,9.6,5.6,4.8,14.6]
        }]
    });
});
