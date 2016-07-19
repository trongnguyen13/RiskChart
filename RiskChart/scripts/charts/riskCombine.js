ko.bindingHandlers.combineChart = {
    init: function (element, valueAccessor, allBindings) {
        var options = ko.unwrap(valueAccessor()) || {};

        var data = options.data() || [];
        var name = options.name() || null;

        $(element).highcharts({
            title: {
                text: 'Closed Risk'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
            },
            labels: {
                items: [{
                    html: 'Total risk',
                    style: {
                        left: '50px',
                        top: '18px',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                    }
                }]
            },
            series: [{
                type: 'column',
                name: 'Closed Risk',
                data: [30, 20, 10, 13, 14, 28, 39]
            }, {
                type: 'spline',
                name: 'Closed Issue',
                data: [10, 15, 3, 6, 8, 14, 20],
                marker: {
                    lineWidth: 1,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            }]
        });
    }
}