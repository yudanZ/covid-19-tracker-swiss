import React from 'react';
import './overViewInfo.css';

const OverViewInfo = (props) => {
    //console.log(props.latestInfo)
    return (
        <div className='overview-container'>
            <h2>New Coronavirus:Situation in Switzerland </h2>
            <table className="table table-bordered overview-table">
            <thead>
                <tr>
                <th scope="col">{props.latestInfo.date}</th>
                <th scope="col">New Cases</th>
                <th scope="col">Total since the beginning
                the epidemic</th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Laboratory Confirmed Infections</th>
                <td>{props.latestInfo.news === 0 ? '--' : props.latestInfo.news}</td>
                <td>{props.latestInfo.totalconfirmed === 0 ? '--' : props.latestInfo.totalconfirmed}</td>
                 
                </tr>
                <tr>
                <th scope="row">Recovered</th>
                <td>{props.latestInfo.newrecovered === 0 ? '--' : props.latestInfo.newrecovered}</td>
                <td>{props.latestInfo.totalrecovered}</td>
               
                </tr>
                <tr>
                <th scope="row">Deaths</th>
                <td >{props.latestInfo.newdeath === '0' ? '--' : props.latestInfo.newdeath}</td>
                <td>{props.latestInfo.totaldeath}</td>
                </tr>
                <tr>
               
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default OverViewInfo;