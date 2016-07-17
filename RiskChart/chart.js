$(function () {
    $('#container').highcharts({
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
            }
        },
        title: {
            text: 'Risk Matrix',
//            align: 'left',
            //style: {
            //    fontWeight: 'bold'
            //}
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

        //tooltip: {
        //    enabled: true,
        //    formatter: function () {
        //        return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
        //          this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
        //    }
        //},
        //plotOptions: {
        //    series: {
        //        states: {
        //            hover: {
        //                color: 'white'
        //            }
        //        }
        //    }
        //},
        credits: {
            enabled: false
        },
        series: [{
          //  type: 'heatmap',
          //  name: '',
            data: [
              [1, 9, 20],
              [2, 9, 10],
              [3, 9, 30],
              [4, 9, 40],
              [3, 1, 12],
              [2, 2, 8],
              [4, 5, 18],
              [3, 9, 5],
              [2, 3, 9],
              [3, 2, 9]
            ],
            dataLabels: {
                enabled: true,
                color: 'black',
                style: {
                    textShadow: 'none'
                }
            }
        }]

    });
});
