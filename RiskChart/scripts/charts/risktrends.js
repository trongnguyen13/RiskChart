ko.bindingHandlers.trendsChart = {
    init: function (element, valueAccessor, allBindings) {
        var options = ko.unwrap(valueAccessor()) || {};

        var data = options.data() || [];
        var name = options.name() || null;

        $(element).highcharts({
            chart: {
                type: 'line'
            },
            title: {
                text: 'Risk Trends'
            },
            subtitle: {
                text: ''
            },
            yAxis: {
                title: {
                    text: name,
                    style: {
                        fontWeight: 'bold'
                    }
                }
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
                name: 'Risk',
                data: data,
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
                }
            }]
        });
    }
};