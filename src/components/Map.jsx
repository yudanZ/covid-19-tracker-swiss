import React from 'react';
import Highcharts from 'highcharts/';
import HighchartsReact from 'highcharts-react-official';
import {mapDataSwitzerland } from "../database/mapDataSwitlzerland";
import './map.css';
require('highcharts/modules/map')(Highcharts);


  
class Map extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            mapData: null
        }
    }

    
    componentDidMount(){
        this.getMapData();
        //console.log(this.state)
        
    }

   

    setSeriesData = ( casesData ) => {
        const newData = casesData;
        //console.log(newData)
        let filterData = [];
        newData.forEach( item => {
            //console.log(item);
            let contonKey = item.fields.abbreviation_canton_and_fl;
            contonKey = 'ch-' + contonKey.toLowerCase();
            filterData.push([contonKey, item.fields.ncumul_conf])
            //console.log(contonKey);

        })
       return filterData;
    }

    setOptions = (mapData , myChartData , date) => {
        const options = {
            chart: {
                map: mapData
            },
        
            title: {
                text: 'Laboratory Confirmed Cases: Geographical Distribution'
            },
        
            subtitle: {
                text: 'Update Time :  ' + date
            },
        
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
        
            colorAxis: {
                min: 0
            },
        
            series: [{
                data: myChartData,
                name: 'Laboratory Confirmed Cases',
                states: {
                    hover: {
                        color: '#BADA55'
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }]
        }
        return options;
    }

    getMapData = async() => {
        try{
            const mapData = await mapDataSwitzerland();
            
            this.setState ({ mapData: mapData})
            //console.log(this.state) 

        }catch(error){
            console.log( error);
        }
        
    }
    render() {
        //console.log(this.sate)
        const {contonsData } = this.props;
        //console.log(contonsData[0].fields.date)
        const { mapData } = this.state;

        const myChartData = this.setSeriesData( contonsData);
        
        const options = this.setOptions(mapData, myChartData ,contonsData[0].fields.date);
        //console.log(myChartData)
        return (
            <div className='mapchart-container'>
                
                <HighchartsReact
                     
                    highcharts = {Highcharts}
                    constructorType = { 'mapChart' }
                    options={options}
                />
            </div>
        )
    }

}

export default Map