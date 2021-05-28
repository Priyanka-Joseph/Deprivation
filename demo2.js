$(function () { 
    $('#container').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Education, Skills and Training Score Domain Deprivation - 2019'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Education Domain - Children and Young People Score'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: "Decile",
            colorByPoint: true,
            data: [
                {
                    name: "Decile 1",
                    y: 1.99,
                    drilldown: "Decile 1"
                },
                {
                    name: "Decile 2",
                    y: 10.57,
                    drilldown: "Decile 2"
                },
                {
                    name: "Decile 3",
                    y: 7.23,
                    drilldown: "Decile 3"
                },
                {
                    name: "Decile 4",
                    y: 5.58,
                    drilldown: "Decile 4"
                },
                {
                    name: "Decile 5",
                    y: 4.02,
                    drilldown: "Decile 5"
                },
                {
                    name: "Decile 6",
                    y: 1.92,
                    drilldown: "Decile 6"
                },
                {
                    name: "Decile 7",
                    y: 1.92,
                    drilldown: "Decile 7"
                },
                {
                    name: "Decile 8",
                    y: 1.92,
                    drilldown: "Decile 8"
                },
                {
                    name: "Decile 9",
                    y: 1.92,
                    drilldown: "Decile 9"
                },
                {
                    name: "Decile 10",
                    y: 1.92,
                    drilldown: "Decile 10"
                }
            ]
        }
    ],
    drilldown: {
        series: [
            {
                name: "Decile 1",
                id: "Decile 1",
                data: [
                    [
                        "Bexley",
                        1.17
                    ],
                    [
                        "Havering",
                        1.13
                    ],
                    [
                        "Bolton",
                        1.34
                    ],
                    [
                        "Bury",
                        1.26
                    ],
                    [
                        "Manchester",
                        1.28
                    ],
                    [
                        "Oldham",
                        1.45
                    ],
                    [
                        "Rochdale",
                        1.25
                    ],
                    [
                        "Salford",
                        1.28
                    ],
                    [
                        "Stockport",
                        1.74
                    ],
                    [
                        "Tameside",
                        1.29
                    ],
                    [
                        "Trafford",
                        1.56
                    ],
                    [
                        "Wigan",
                        1.33
                    ],
                    [
                        "Knowsley",
                        1.312
                    ],
                    [
                        "Liverpool",
                        2.35
                    ],
                    [
                        "St.Helens",
                        1.44
                    ],
                    [
                        "Sefton",
                        1.34
                    ],
                    [
                        "Wirral",
                        1.46
                    ],
                    [
                        "Barnsley",
                        1.42
                    ],
                    [
                        "Doncaster",
                        1.64
                    ],
                    [
                        "Roterham",
                        1.56
                    ],
                    [
                        'Sheffield',
                        1.53
                    ],
                    [
                        'Gateshead',
                        1.36
                    ],
                    [
                        'Newcastle upon Tyne',
                        1.41
                    ]
                ]
            },
            {
                name: "Decile 2",
                id: "Decile 2",
                data: [
                    [
                        "Bexley",
                        0.95
                    ],
                    [
                        "Barking and Dagenham",
                        0.69
                    ],
                    [
                        "Bromley",
                        0.80
                    ],
                    [
                        "Enfield",
                        0.78
                    ],
                    [
                        "Haringey",
                        0.819
                    ],
                    [
                        "Hillingdon",
                        0.88
                    ],
                    [
                        "Bolton",
                        0.87
                    ],
                    [
                        "Manchester",
                        0.8
                    ],
                    [
                        "Oldham",
                        1.5
                    ],
                    [
                        "Rochdale",
                        0.79
                    ],
                    [
                        "Salford",
                        0.83
                    ],
                    [
                        "Stockport",
                        0.98
                    ],
                    [
                        "Tameside",
                        0.85
                    ],
                    [
                        "Trafford",
                        0.93
                    ],
                    [
                        "Wigan",
                        0.82
                    ],
                    [
                        "Knowsley",
                        0.87
                    ],
                    [
                        "Liverpool",
                        0.82
                    ],
                    [
                        "St.Helens",
                        0.86
                    ],
                    [
                        "Sefton",
                        0.82
                    ],
                    [
                        "Wirral",
                        0.87
                    ],
                    [
                        'Barnsley',
                        0.80
                    ],
                    [
                        'Doncaster',
                        0.87
                    ],
                    [
                        'Rotherham',
                        0.885
                    ]
                ]
            },
            {
                name: "Decile 3",
                id: "Decile 3",
                data: [
                    [
                        "Barking and Dagenham",
                        0.47
                    ],
                    [
                        "Bexley",
                        0.55
                    ],
                    [
                        "Bromley",
                        0.49
                    ],
                    [
                        "Camden",
                        0.5
                    ],
                    [
                        "Croydon",
                        0.52
                    ],
                    [
                        "Enfield",
                        0.49
                    ],
                    [
                        "Haringey",
                        0.59
                    ],
                    [
                        "Havering",
                        0.50
                    ],
                    [
                        "Hillingdon",
                        0.52
                    ],
                    [
                        "Hounslow",
                        0.46
                    ],
                    [
                        "Islington",
                        0.46
                    ],
                    [
                        "Lewisham",
                        0.57
                    ],
                    [
                        "Sutton",
                        0.56
                    ],
                    [
                        "Bolton",
                        0.56
                    ],
                    [
                        "Bury",
                        0.5
                    ],
                    [
                        "Manchester",
                        0.54
                    ],
                    [
                        "Oldham",
                        0.9
                    ],
                    [
                        "Rochdale",
                        0.5
                    ],
                    [
                        "Salford",
                        0.56
                    ],
                    [
                        "Stockport",
                        0.55
                    ],
                    [
                        'Tameside',
                        0.5
                    ],
                    [
                        'Trafford',
                        0.6
                    ],
                    [
                        'Wigan',
                        0.51
                    ]
                ]
            },
            {
                name: "Decile 5",
                id: "Decile 5",
                data: [
                    [
                        "Barking and Dagenham",
                        0.005
                    ],
                    [
                        "Barnet",
                        0.10
                    ],
                    [
                        "Bexley",
                        0.07
                    ],
                    [
                        "Brent",
                        -0.03
                    ],
                    [
                        "Bromley",
                        0.06
                    ],
                    [
                        "Camden",
                        0.05    
                    ],
                    [
                        "Croydon",
                        0.07
                    ],
                    [
                        "Ealing",
                        0.03
                    ],
                    [
                        "Greenwich",
                        0.08
                    ],
                    [
                        "Hackney",
                        0.12
                    ],
                    [
                        "Haringey",
                        0.10
                    ],
                    [
                        "Havering",
                        0.10
                    ],
                    [
                        "Kingston and Chelsea",
                        0.06
                    ],
                    [
                        "Lambeth",
                        0.07
                    ],
                    [
                        "Lewisham",
                        0.10
                    ],
                    [
                        "Merton",
                        0.03
                    ],
                    [
                        "RedBridge",
                        0.05
                    ],
                    [
                        "Richmond upon Thames",
                        0.12
                    ],
                    [
                        "South Wark",
                        0.02
                    ],
                    [
                        "Sutton",
                        0.07
                    ],
                    [
                        'Tower Hamlets',
                        0.02
                    ],
                    [
                        'Waltham Forest',
                        0.06
                    ],
                    [
                        'West Minister',
                        0.05
                    ]
                ]
            },

            {
                name: "Decile 4",
                id: "Decile 4",
                data: [
                    [
                        "Barking and Dagenham",
                        0.104
                    ],
                    [
                        "Barnet",
                        0.1015
                    ],
                    [
                        "Bexley",
                        0.07
                    ],
                    [
                        "Brent",
                        0.101
                    ],
                    [
                        "Bromley",
                        0.107
                    ],
                    [
                        "Camden",
                        0.01    
                    ],
                    [
                        "Croydon",
                        0.13
                    ],
                    [
                        "Ealing",
                        0.037
                    ],
                    [
                        "Enfield",
                        0.04
                    ],
                    [
                        "Greenwich",
                        0.076
                    ],
                    [
                        "Hackney",
                        0.10
                    ],
                    [
                        "Haringey",
                        0.04
                    ],
                    [
                        "Havering",
                        0.08
                    ],
                    [
                        "Hillingdon",
                        0.07
                    ],
                    [
                        "Hounslow",
                        0.11
                    ],
                    [
                        "Islington",
                        0.09
                    ],
                    [
                        "Lambeth",
                        0.11
                    ],
                    [
                        "Lewisham",
                        0.03
                    ],
                    [
                        "Merton",
                        0.3
                    ],
                    [
                        "Newham",
                        0.04
                    ],
                    [
                        'Redbridge',
                        0.16
                    ],
                    [
                        'Southwark',
                        0.11
                    ],
                    [
                        'Tower Hamlets',
                        0.04
                    ]
                ]
            },

         {
                name: "Decile 5",
                id: "Decile 5",
                data: [
                    [
                        "Barking and Dagenham",
                        0.005
                    ],
                    [
                        "Barnet",
                        0.10
                    ],
                    [
                        "Bexley",
                        0.07
                    ],
                    [
                        "Brent",
                        -0.03
                    ],
                    [
                        "Bromley",
                        0.06
                    ],
                    [
                        "Camden",
                        0.05    
                    ],
                    [
                        "Croydon",
                        0.07
                    ],
                    [
                        "Ealing",
                        0.03
                    ],
                    [
                        "Greenwich",
                        0.08
                    ],
                    [
                        "Hackney",
                        0.12
                    ],
                    [
                        "Haringey",
                        0.10
                    ],
                    [
                        "Havering",
                        0.10
                    ],
                    [
                        "Kingston and Chelsea",
                        0.06
                    ],
                    [
                        "Lambeth",
                        0.07
                    ],
                    [
                        "Lewisham",
                        0.10
                    ],
                    [
                        "Merton",
                        0.03
                    ],
                    [
                        "RedBridge",
                        0.05
                    ],
                    [
                        "Richmond upon Thames",
                        0.12
                    ],
                    [
                        "South Wark",
                        0.02
                    ],
                    [
                        "Sutton",
                        0.07
                    ],
                    [
                        'Tower Hamlets',
                        0.02
                    ],
                    [
                        'Waltham Forest',
                        0.06
                    ],
                    [
                        'West Minister',
                        0.05
                    ]
                ]
            },
            {
                name: "Decile 6",
                id: "Decile 6",
                data: [
                    [
                        "Barnet",
                        -0.11
                    ],
                    [
                        "Bexley",
                        -0.12
                    ],
                    [
                        "Bromley",
                        -0.16
                    ],
                    [
                        "Brent",
                        -0.13
                    ],
                    [
                        "Camden",
                        -0.12
                    ],
                    [
                        "Croydon",
                        -0.11
                    ],
                    [
                        "Enfield",
                        -0.13
                    ],
                    [
                        "Ealing",
                        -0.13
                    ],
                    [
                        "Greenwich",
                        -0.12
                    ],
                    [
                        "Hackney",
                        -0.11
                    ],
                    [
                        "Hammersmith and Fulham",
                        -0.05
                    ],
                    [
                        "Haringey",
                        -0.16
                    ],
                    [
                        "Harrow",
                        -0.15
                    ],
                    [
                        "Hillingdon",
                        -0.14
                    ],
                    [
                        "Islington",
                        -0.07
                    ],
                    [
                        "Kenningston and Chelsea",
                        -0.08
                    ],
                    [
                        "RedBridge",
                        0.05
                    ],
                    [
                        "Kingston upon Thames",
                        -0.12
                    ],
                    [
                        "Lambeth",
                        -0.112
                    ],
                    [
                        "Lewisham",
                        -0.10
                    ],
                    [
                        'Merton',
                        -0.13
                    ],
                    [
                        'Newham',
                        -0.16
                    ],
                    [
                        'Southwark',
                        -0.16
                    ]
                ]
            },

            {
                name: "Decile 7",
                id: "Decile 7",
                data: [
                    [
                        "Barking and Dagenham",
                        -0.23
                    ],
                    [
                        "Barnet",
                        -0.30
                    ],
                    [
                        "Bexley",
                        -0.29
                    ],
                    [
                        "Brent",
                        -0.3
                    ],
                    [
                        "Bromley",
                        -0.35
                    ],
                    [
                        "Croydon",
                        -0.33
                    ],
                    [
                        "Ealing",
                        -0.29
                    ],
                    [
                        "Enfield",
                        -0.29
                    ],
                    [
                        "Greenwich",
                        -0.34
                    ],
                    [
                        "Hackney",
                        -0.33
                    ],
                    [
                        "Hammersmith and Fulham", 
                       -0.37
                    ],
                    [
                        "Harrow",
                        -0.38
                    ],
                    [
                        "Hillingdon",
                        -0.32
                    ],
                    [
                        "Hounslow",
                        -0.36
                    ],
                    [
                        "Islington",
                        -0.33
                    ],
                    [
                        "Kensington and chelsea",
                        -0.33
                    ],
                    [
                        "Lambeth",
                        -0.33
                    ],
                    [
                        "Lewisham",
                        -0.35
                    ],
                    [
                        "Merton",
                        -0.4
                    ],
                    [
                        "Sutton",
                        -0.34
                    ],
                    [
                        'South Wark',
                        -0.323
                    ],
                    [
                        'Waltham Forest',
                        -0.33
                    ],
                    [
                        'West Minister',
                        -0.2
                    ]
                ]
            },
            {
                name: "Decile 8",
                id: "Decile 8",
                data: [
                    [
                        "Bexley",
                        -0.67
                    ],
                    [
                        "Barnet",
                        -0.55
                    ],
                    [
                        "Brent",
                        -0.57
                    ],
                    [
                        "Bromley",
                        -0.55
                    ],
                    [
                        "Croydon",
                        -0.57
                    ],
                    [
                        "Ealing",
                        -0.5
                    ],
                    [
                        "Enfield",
                        -0.57
                    ],
                    [
                        "Greenwich",
                        -0.58
                    ],
                    [
                        "Hackney",
                        -0.55
                    ],
                    [
                        "Hammersmith and Fulham", 
                       -0.48
                    ],
                    [
                        "Harrow",
                        -0.50
                    ],
                    [
                        "Hillingdon",
                        -0.54
                    ],
                    [
                        "Hounslow",
                        -0.52
                    ],
                    [
                        "Islington",
                        -0.74
                    ],
                    [
                        "Kensington and chelsea",
                        -0.43
                    ],
                    [
                        "Lambeth",
                        -0.76
                    ],
                    [
                        "Lewisham",
                        -0.64
                    ],
                    [
                        "Merton",
                        -0.52
                    ],
                    [
                        "Sutton",
                        -0.48
                    ],
                    [
                        'South Wark',
                        -0.9
                    ],
                    [
                        'Waltham Forest',
                        -0.6
                    ],
                    [
                        'West Minister',
                        -0.4
                    ]
                ]
            },
            {
                name: "Decile 9",
                id: "Decile 9",
                data: [
                    [
                        "Barnet",
                        -0.81
                    ],
                    [
                        "Bexley",
                        -0.76
                    ],
                    [
                        "Brent",
                        -0.8
                    ],
                    [
                        "Bromley",
                        -0.91
                    ],
                    [
                        "Croydon",
                        -0.86
                    ],
                    [
                        "Ealing",
                        -0.83
                    ],
                    [
                        "Enfield",
                        -0.90
                    ],
                    [
                        "Greenwich",
                        -0.81
                    ],
                    [
                        "Hackney",
                        -0.73
                    ],
                    [
                        "Hammersmith and Fulham", 
                       -0.68
                    ],
                    [
                        "Harrow",
                        -0.87
                    ],
                    [
                        "Hillingdon",
                        -0.93
                    ],
                    [
                        "Hounslow",
                        -0.76
                    ],
                    [
                        "Islington",
                        -0.92
                    ],
                    [
                        "Kensington and chelsea",
                        -0.85
                    ],
                    [
                        "Lambeth",
                        -0.92
                    ],
                    [
                        "Lewisham",
                        -0.89
                    ],
                    [
                        "Merton",
                        -0.72
                    ],
                    [
                        "Sutton",
                        -0.94
                    ],
                    [
                        'South Wark',
                        -0.56
                    ],
                    [
                        'Waltham Forest',
                        -0.9
                    ],
                    [
                        'West Minister',
                        -0.9
                    ]
                ]
            },
            {
                name: "Decile 10",
                id: "Decile 10",
                data: [
                    [
                        "City of London",
                        0.04
                    ],
                    [
                        "Barnet",
                        1.47
                    ],
                    [
                        "Bexley",
                        1.29
                    ],
                    [
                        "Brent",
                        2.3
                    ],
                    [
                        "Bromley",
                        1.8
                    ],
                    [
                        "Croydon",
                        1.9
                    ],
                    [
                        "Ealing",
                        1.17
                    ],
                    [
                        "Enfield",
                        1.80
                    ],
                    [
                        "Greenwich",
                        1.67
                    ],
                    [
                        "Hackney",
                        1.44
                    ],
                    [
                        "Hammersmith and Fulham", 
                       0.90
                    ],
                    [
                        "Harrow",
                        0.71
                    ],
                    [
                        "Hillingdon",
                        2.03
                    ],
                    [
                        "Hounslow",
                        1.8
                    ],
                    [
                        "Islington",
                        1.9
                    ],
                    [
                        "Kensington and chelsea",
                        1.2
                    ],
                    [
                        "Lambeth",
                        1.60
                    ],
                    [
                        "Lewisham",
                        0.96
                    ],
                    [
                        "Merton",
                        0.56
                    ],
                    [
                        "Sutton",
                        0.92
                    ],
                    [
                        'South Wark',
                        0.65
                    ],
                    [
                        'Waltham Forest',
                        1.7
                    ],
                    [
                        'West Minister',
                        1.2
                    ]
                ]
            },
            
        ]
    }

});
});