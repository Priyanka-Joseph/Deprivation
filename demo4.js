$(function () { 
    $('#container').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Comparision of Crime rate in Most Deprived Areas in 2015 and 2019'
    },
    subtitle: {
        text: 'Source: GOV.UK'
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
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Crime rate (%)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '2019',
        data: [10.5,14.9,10.1,10.4,4.6,8.8,7.8,12.5,8.9,7.3,6.7,3.6,6.2,10.4,9.7,8.4,7.8,11.8,2.4,11.2,19.1,9.9,8.4,4.0,8.1,10.7,4.3,2.9,9.1,3.2,2.1,4.0,6.5,2.3,3.7,7.2,4.4,1.3,4.8]

    }, {
        name: '2015',
        data: [12.5,13.9,9.1,20.4,14.2,5.8,10.8,15.5,12.9,3.3,10.7,7.6,6.2,10.4,6.7,6.4,7.8,11.8,3.4,9.2,21.1,5.9,9.4,7.0,3.1,9.7,3.3,2.9,2.1,3.2,2.1,4.0,6.5,4.3,1.7,5.2,0.4,1.3,0.8]

    }
    ]
});
});