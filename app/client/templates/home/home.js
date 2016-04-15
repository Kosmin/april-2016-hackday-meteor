Template.Home.topGenresChart = function() {
    return {
        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },

        legend: {
            enabled: false
        },

        title: {
            text: 'Risks Heatmap'
        },

        xxxsubtitle: {
            text: 'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Likelihood'
            },
            labels: {
                format: '{value} %'
            },
            xxxplotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 65,
                label: {
                    rotation: 0,
                    y: 15,
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Safe fat intake 65g/day'
                },
                zIndex: 3
            }]
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Impact'
            },
            labels: {
                format: '{value} %'
            },
            maxPadding: 0.2,
            xxxplotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 50,
                label: {
                    align: 'right',
                    style: {
                        fontStyle: 'italic'
                    },
                    text: 'Safe sugar intake 50g/day',
                    x: -10
                },
                zIndex: 3
            }]
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
                '<tr><th>Likelihood:</th><td>{point.x}g</td></tr>' +
                '<tr><th>Impact:</th><td>{point.y}g</td></tr>' +
                '<tr><th>Score:</th><td>{point.z}%</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },

        series: [{
            data: [
                { x: 95, y: 95, z: 13.8, name: '1', country: 'Geopolitical' },
                { x: 86.5, y: 82.9, z: 14.7, name: '2', country: 'Tax Compliance' },
                { x: 80.8, y: 91.5, z: 15.8, name: '3', country: 'Indemnity Risk' },
                { x: 80.4, y: 102.5, z: 12, name: '4', country: 'Environmental' },
                { x: 80.3, y: 86.1, z: 11.8, name: '5', country: 'Conduct' },
                { x: 78.4, y: 70.1, z: 16.6, name: '6', country: 'Audit Strategy Risk' },
                { x: 74.2, y: 68.5, z: 14.5, name: '7', country: 'Fraud Risk' },
                { x: 73.5, y: 83.1, z: 10, name: '8', country: 'Geopolitical' },
                { x: 71, y: 93.2, z: 24.7, name: '9', country: 'Talent Loss' },
                { x: 69.2, y: 57.6, z: 10.4, name: '10', country: 'OPEX Spending' },
                { x: 68.6, y: 20, z: 16, name: '11', country: 'Currency Risk' },
                { x: 65.5, y: 72.4, z: 35.3, name: '12', country: 'Business Continuity' },
                { x: 65.4, y: 50.8, z: 28.5, name: '13', country: 'Litigation Risks' },
                { x: 63.4, y: 51.8, z: 15.4, name: '14', country: 'Competitive Pressure' },
                { x: 64, y: 82.9, z: 31.3, name: '15', country: 'Legal Compliance' }
            ]
        }]
    };
};



