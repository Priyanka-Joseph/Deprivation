$(function () { 
    $('#container').highcharts({
    chart: {
        type: 'line'
    },
    title: {
        text: 'Proportion of Neighbourhoods in Local Enterprise partnership with the most deprived 10 percent of Health Domain'
        
    },
    xAxis: {
        categories: ['Liverpool city', 'Tees Valley	', 'Birmingham', 'Humber', 'Manchester','Black Country', 'SHeffield', 'Lancashire', 'Leeds', 'North Eastern', 'Lincolnshire', 'Derby', 'Nottingham','Leicester','Staffordshire','Coventry','West of England','Northamptonshire','New Anglia','Solent','London','Warrington','South East','South West','Corn wall','Midlands','Worcestershire','The Marches','Cambridge','Gloucestershire','York','Dorset','Coast of Capital','Swindon','Oxfordshire','Thames Valley','Hertfordshire','Buckinghamshire']
    },
    yAxis: {
        title: {
            text: 'Health Deprivation and Disability (%)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: '2015',
        data: [49.8,32.9,9.6,11.3,31.3,8.1,19.4,27.2,15.7,29.0,9,4,10.8,17.1,5.6,10.9,7.5,6.5,5.9,4.7,5.3,1.3,8.9,2.4,5.8,4.0,3.5,3.0,3.4,2.3,1.9,2.3,2.7,2.6,0.5,0.0,0.1,0.0]
    }, {
        name: '2019',
        data: [45.8,33.8,11.2,10.9,38.3,6.9,29.5,35.9,25.9,39.0,13,21,10.8,17.1,20.6,10.9,7.5,11.5,13.9,10.7,21.9,1.3,8.9,9.4,5.8,7.0,2.5,8.6,5.4,3.3,4.2,2.3,2.7,2.6,0.5,3.0,0.1,5.0]
    }]
});
});