$(function () {
    $('#container-line').highcharts({
        chart: {
            type: 'line'//'spline'
        },
        title: {
            text: 'Risk History'
        },
        subtitle: {
            text: ''
        },
        yAxis: {
            //categories: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            plotLines: [{
                color: '#FF0000', // Red
                width: 2,
                value: 5.5 // Position, you'll have to translate this to the values on your x axis
            }]
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false,
                marker: {
                    enabled: false
                }
            },
           
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Num',
            data: [1.5, 3.2, 2.4, 0.8, 1.1, 3.9, 2.2, 0.5, 1.8, 1.3, 0.7, 3.0],
            color: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0.4, 'rgb(255,0,0)'],
                    [0.6, 'rgb(255,255,0)'],
                   [1, 'rgb(124,252,0)']
                ]
            },
            dashStyle: 'dash'
        }]
    });
});