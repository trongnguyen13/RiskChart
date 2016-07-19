ko.bindingHandlers.matrixChart = {
    init: function (element, valueAccessor, allBindings) {
        var options = ko.unwrap(valueAccessor()) || {};

        var data = options.data() || [];
        var name = options.name() || null;

        var circleX = 161.2;
        var circleY = 51.6;
        var circleR = 0.04;

        function addCircle(chart) {
            if (this.circle) {
                $(this.circle.element).remove();
            }

            for (var i = 0; i < chart.series[0].data.length; i++) {
                pixel = chart.series[0].data[i];
                var pixelX = chart.xAxis[0].toPixels(pixel.x);
                var pixelY = chart.yAxis[0].toPixels(pixel.y);
                var pixelR = chart.xAxis[0].toPixels(circleR) - chart.xAxis[0].toPixels(0);

                this.circle = chart.renderer.circle(pixelX, pixelY, pixelR).attr({
                    fill: 'transparent',
                    stroke: 'black',
                    'stroke-width': 1
                });
                this.circle.add();
            }
           
        }

        $(element).highcharts({
            chart: {
                type: 'heatmap',
                plotBackgroundColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 1,
                        x2: 1,
                        y2: 0
                    },
                    stops: [
                      [0.4, 'rgb(124,252,0)'],
                      [0.6, 'rgb(255,255,0)'],
                      [1, 'rgb(255,0,0)']
                    ]
                },
                events: {
                    load: function () {
                        addCircle(this);
                    },
                    redraw: function () {
                        addCircle(this);
                    }
                }
            },
            title: {
                text: 'Risk Matrix',
            },
            xAxis: {
                categories: ['', 'Insignificant', 'Minimum', 'Material', 'Critical'],
                title: {
                    text: "Impact",
                    style: {
                        fontWeight: 'bold'
                    }
                }
            },
            yAxis: {
                categories: ['', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9'],
                title: {
                    text: 'Likelihood',
                    style: {
                        fontWeight: 'bold'
                    }
                },
                minorGridLineWidth: 0,
                gridLineWidth: 0,
            },
            colorAxis: {
                min: 0,
                minColor: 'transparent',
                maxColor: 'transparent',
            },
            legend: {
                enabled: false,
                align: 'right',
                layout: 'vertical',
                margin: 0,
                verticalAlign: 'top',
                y: 25,
                symbolHeight: 320
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                series: {
                    cursor: 'pointer',
                    events: {
                        click: function (event) {
                            //alert(event.point);
                        }
                    }
                }
            },
            series: [{
                data: data,
                dataLabels: {
                    enabled: true,
                    color: 'black',
                    style: {
                        textShadow: 'none'
                    }
                }
            }]

        });
    }
};