import React from 'react';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import './lineChart.css';

const LineChart = (props) => {
    //console.log('start Point:' + props.earliestDate);
    var options = {
        title: {
          text: 'Laboratory confirmed cases: evolution of geographical spread over time'
        },
        xAxis: {
            type: 'datetime',
            labels: {
                format: '{value: %m/%Y}',
                align: 'right',
                rotation: -30
            },
            title: {
                text: 'date'
            },
            tickInterval: 15* 24 * 3600 * 1000
        },
        plotOptions: {
            series:{
                pointStart: props.earliestDate,
                pointInterval:  24 * 3600 * 1000
            }
            
            
        },
        yAxis: {
            lineWidth: 1,
            tickWidth: 1,
            title: {
                align: 'high',
                offset: 0,
                text: 'numbers of cases',
                rotation: 0,
                y: -10
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        series: props.options, 
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  align: 'center',
                  verticalAlign: 'bottom',
                  layout: 'horizontal'
                },
                yAxis: {
                  labels: {
                    align: 'left',
                    x: 0,
                    y: -5
                  },
                  title: {
                    text: null
                  }
                },
                subtitle: {
                  text: null
                },
                credits: {
                  enabled: false
                }
              }
            }]
          },
      }
      
      //console.log(options);
    return (
        <div className='linechart-container'>
        {props.earliestDate ? <HighchartsReact
            highcharts = {Highcharts}
            options = {options} 
        /> : <div>Loading...</div>}    
        
        </div>
    )
}
export default LineChart;