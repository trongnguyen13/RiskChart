ko.bindingHandlers.columnChart = {
    init: function (element, valueAccessor, allBindings) {
        var options = ko.unwrap(valueAccessor()) || {};

        var title = options.title() || null;
        var data = options.data() || [];
        var name = options.name() || null;

        // Create the chart
        $(element).highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: title
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: ''
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
                        format: '{point.y:.1f} risks'
                    }
                }
            },

            //tooltip: {
            //    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            //    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            //},

            series: [{
                name: 'Category',
                colorByPoint: true,
                data: [{
                    name: 'Category 1',
                    y: 10,
                    drilldown: 'Category1'
                }, {
                    name: 'Category 2',
                    y: 24,
                    drilldown: 'Category2'
                }, {
                    name: 'Category 3',
                    y: 15,
                    drilldown: 'Category3'
                }]
            }],
            drilldown: {
                series: [{
                    name: 'Category 1',
                    id: 'Category1',
                    data: [
                        [
                            'Risk 1',
                            4
                        ],
                        [
                            'Risk 2',
                            2
                        ],
                        [
                            'Risk 3',
                            3
                        ],
                        [
                            'Risk 4',
                            1
                        ]
                    ]
                }, {
                    name: 'Category 2',
                    id: 'Category2',
                    data: [
                        [
                            'Risk 2.1',
                            5
                        ],
                        [
                            'Risk 2.2',
                            10
                        ],
                        [
                            'Risk 2.3',
                            9
                        ]
                    ]
                }, {
                    name: 'Category 3',
                    id: 'Category3',
                    data: [
                        [
                            'Risk 3.1',
                            6
                        ],
                        [
                            'Risk 3.2',
                            9
                        ]
                    ]
                }]
            }
        });
    }
}