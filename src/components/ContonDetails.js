import React from 'react';
import DropDown from './DropDown';
import LineChart from './LineChart';
import EachContonCart from './EachContonCart';
import './contonDetails.css';

const ContonDetails = (props) => {
    return(
        <div className="contondetails-container">
            <div className="contondetails-left">
                <DropDown onButtonClick = {props.getContonName}/>
                {props.latestInfoByName ? 
                    <EachContonCart latestInfoByName = {props.latestInfoByName}/>
                :
                <div>Loading ...</div>}
                
            </div>
           
            <LineChart className='conton-line-chart' options={props.chartOptins} earliestDate={props.earliestDate}/>
           
            
        </div>
    )
}

export default ContonDetails