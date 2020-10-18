import React from 'react';
import axios from 'axios';
import Map from '../components/Map';
import ContonDetails from '../components/ContonDetails';
import { fileterDateForLineChart } from '../utility/utities';
import './chartPanel.css';
class ChartPanel extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            isLoading: false,
            name: 'Zürich',
            contonData: [],
            lineChartOptions: [],
            xAxisArr: [],
            latestInfoByName: null,
            latestRecordDate: this.getCurrentDate()
        }
        
    }

    componentDidMount() {
        this.fetchContonData();
        
        this.fetchData();
        
        
        
        //console.log(this.state)
      }

   

    getLineChartsOptions = (contonData) => {
        const reversedArr = contonData.reverse()
        //console.log( contonData);
        
        let options = [];
        
        let confirmedObject = {
            name: 'total confirmed number',
            data: []
        }
        let numberOfHospObject = {
            name: 'Numbers of Hospital',
            data: [],
           
            
        }
        let totalDeathObject = {
            name: 'total death number',
            data: [],
            color: '#FF0000'
            
        }
        let earliestDate = contonData[0].fields.date;
        reversedArr.forEach( element => {
            //console.log(element)
            confirmedObject.data.push([element.fields.date,element.fields.ncumul_conf ? element.fields.ncumul_conf : 0])
            numberOfHospObject.data.push([element.fields.dat,element.fields.ncumul_hosp ? element.fields.ncumul_hosp : 0])
            totalDeathObject.data.push([element.fields.dat,element.fields.ncumul_deceased ? element.fields.ncumul_deceased : 0])
            
        })
        //console.log(confirmedObject);
        options.push(confirmedObject);
        options.push(numberOfHospObject);
        options.push(totalDeathObject);
        this.setState({lineChartOptions: options})

        this.setState({earliestDate: fileterDateForLineChart(earliestDate)});
        //console.log(this.state.xAxisArr);
        
    }

    

    getCurrentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month}-${day}`;
    }

    getContonName = (e) => {
        //console.log('hello')
        //console.log( e.target.text)
        this.setState({name:e.target.text});
        this.fetchContonData(e.target.text);
    }

    fetchData = async( ) => {
        //console.log( this.state.latestRecordDate);
        const dateArr = this.state.latestRecordDate.split('-')
        //console.log(dateArr);
        this.setState({ isLoading: !this.state.isLoading});
        axios.get(`https://data.bs.ch/api/records/1.0/search/?dataset=100077&q=&rows=30&sort=update&facet=date&facet=name&facet=abbreviation_canton_and_fl&refine.date=${dateArr[0]}%2F${dateArr[1]}%2F${dateArr[2]}`)
        .then(res => {
          const countryData = res.data.records;
         //console.log(countryData);
          this.setState({data: countryData});
        })
    
    
    }

    getLatestInfoByName = (contonData) => {
        const latestInfo = contonData[contonData.length -1]
        //console.log(latestInfo.fields);
        if(latestInfo){
            this.setState({latestInfoByName : latestInfo.fields})
            this.setState({latestRecordDate : latestInfo.fields.date})
        }
    }

    fetchContonData = async(name = this.state.name) => {
        axios.get(`https://data.bs.ch/api/records/1.0/search/?dataset=100077&q=&rows=300&sort=update&facet=date&facet=name&facet=abbreviation_canton_and_fl&refine.name=${name}`)
        .then(res => {
            const contonData = res.data.records;
            //console.log(contonData);
            this.setState({contonData: contonData});
            this.getLineChartsOptions( contonData );
            this.getLatestInfoByName(contonData);
            this.fetchData();
            
        }).catch( error => {
            console.log(error)
        })
    }
    render(){
        //console.log( this.state.contonData)
        return (
            <div className="section-map">
                <h2>New Coronavirus:Situation in Contons</h2>
                
                {
                    this.state.data.length ? <Map contonsData={this.state.data}/> : <div>Loading</div>
                }

                <ContonDetails getContonName={this.getContonName} chartOptins={this.state.lineChartOptions} earliestDate={this.state.earliestDate} latestInfoByName={this.state.latestInfoByName}/>
                
            </div>
        )
    }
    
}
export default ChartPanel