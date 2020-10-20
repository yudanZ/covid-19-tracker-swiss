import React from 'react';
import axios from 'axios';
import OverViewInfo from '../components/OverViewInfo';
import LineChart from '../components/LineChart';
import './overView.css';

class OverView extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
            totalStatus : [],
            newStatus: null,
            options: [],
            earliestDate:1579651200000

        }
    }
    componentDidMount(){
        this.fetchData();
        
        //this.generateLineChartsData(this.state.totalStatus);
        
    }

    fetchData = async( ) => {
        
        //console.log(year, month, day);
       
        axios.get(`https://api.covid19api.com/total/country/switzerland`)
        .then(res => {
          const totalStatus = res.data;
          this.setState({ isLoading: !this.state.isLoading});
          //console.log(totalStatus);
          this.setState({totalStatus: totalStatus});
          console.log( this.state)
          const latestInfos = totalStatus.slice( totalStatus.length -2, totalStatus.length);
          //console.log(latestInfos)
          this.calculateStatus(latestInfos);

          this.generateLineChartsData( totalStatus)
        })
        .catch(error => console.log(error)
        )
    
    
    }

    calculateStatus = (latestInfos) => {
        let newStatus = {
            news: 0,
            totalconfirmed: 0,
            totaldeath: 0,
            totalrecovered: 0,
            newdeath: 0,
            newrecovered: 0,
            date: '--',
            

        };
        //console.log(latestInfos)
        if( latestInfos.length >= 2){
            //console.log(latestInfos[1].Confirmed)
            newStatus.news = latestInfos[1].Confirmed - latestInfos[0].Confirmed;
            newStatus.totalconfirmed = latestInfos[1].Confirmed;
            newStatus.totaldeath = latestInfos[1].Deaths;
            newStatus.totalrecovered = latestInfos[1].Recovered;
            newStatus.newdeath = latestInfos[1].Deaths - latestInfos[0].Deaths;
            newStatus.newrecovered = latestInfos[1].Recovered - latestInfos[0].Recovered;
           
            newStatus.date = this.formateDate(latestInfos[1].Date);
        }

       this.setState({newStatus : newStatus});
       //console.log(this.state)
        
    }

    formateDate  = ( str ) => {
        const splitArr = str.split('-');
        const year = splitArr[0];
        const month = splitArr[1];
       
        const day = (splitArr[2].slice(0,splitArr[2].indexOf('T',0)));

        return `${day}.${month}.${year}`;
    } 

    generateLineChartsData = ( totalStatus ) => {
        //console.log( totalStatus);
        let options = [];
        let confirmedObject = {
            name: 'total confirmed number',
            data: []
        }
        let totalDeathObject = {
            name: 'total death number',
            data: [],
            color: '#FF0000'
            
        }
        let totalRecoveredObject = {
            name: 'total recovered number',
            data: [],
            color: '#008000' 
        }
        totalStatus.forEach( element => {
            //console.log(element)
            confirmedObject.data.push([this.formateDate(element.Date),element.Confirmed])
            totalDeathObject.data.push([this.formateDate(element.Date),element.Deaths])
            totalRecoveredObject.data.push([this.formateDate(element.Date),element.Recovered])
        })
        //console.log(confirmedObject);
        options.push(confirmedObject);
       
        options.push(totalDeathObject);
        options.push(totalRecoveredObject);

        this.setState({options: options})
        //console.log(this.state.options)
    }
    render(){
        const {newStatus, options} = this.state;
        //console.log(options)
        
       
        return(
            <div className='section-overview'>
            
            {newStatus ? <OverViewInfo latestInfo={newStatus}/> : <div>Loading...</div>}
            {options ? <LineChart options = {options} earliestDate={this.state.earliestDate}/> : <div>Loading...</div> }  
            </div>
        )
    }
}

export default OverView;
