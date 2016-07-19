ko.bindingHandlers.stackedChart = {
    init: function (element, valueAccessor, allBindings) {
        var options = ko.unwrap(valueAccessor()) || {};

        var data = options.data() || [];
        var name = options.name() || null;

        $(element).highcharts({
            chart: {
                type: 'column'
            },
            title: {
                //text: 'Total Rish By Category'
                text: 'Open Rish'
            },
            xAxis: {
                // categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total risk'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black'
                        }
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Low',
                color: 'rgb(124,252,0)',
                //data: [5, 3, 4, 7, 2]
                data: [5, 3, 4, 7, 2,4,5]
            }, {
                name: 'Medium',
                color: 'yellow',
                //data: [2, 2, 3, 2, 1]
                data: [2, 2, 3, 2, 1,8,6]
            }, {
                name: 'High',
                color: 'red',
                //data: [3, 4, 4, 2, 5]
                data: [3, 4, 4, 2, 5,14,5]
            }]
        });
    }
}