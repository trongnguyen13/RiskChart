$(function () {
    $('#container-column').highcharts({

        chart: {
            type: 'column'
        },
        title: {
            text: 'Risk History'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        plotOptions: {
            series: {
                colorByPoint: true
            }
        },

        series: [{
            name: 'Num',
            data: [{ y: 1.5, color: 'green' }, { y: 3.2, color: 'red' }
                , { y: 2.4, color: 'yellow' }, { y: 0.8, color: 'green' }
                , { y: 1.1, color: 'green' }, { y: 3.9, color: 'red' }
                , { y: 2.2, color: 'yellow' }, { y: 0.5, color: 'green' }
            , { y: 1.8, color: 'green' }, { y: 1.3, color: 'green' }
            , { y: 0.7, color: 'green' }, { y: 3.0, color: 'red' }]
        }]
    });
});