import React from 'react';

const EachContonCart = (props) => {
    //console.log(props.latestInfoByName)
    return (
        
        <div className='conton-cart'>
            <h2>{props.latestInfoByName.name}: situation</h2>
            <ul className="list-group">
                <li className="list-group-item">Laboratory Confirmed Infections : {props.latestInfoByName.ncumul_conf}</li>
                <li className="list-group-item">Current Hospital : {props.latestInfoByName.current_hosp}</li>
                <li className="list-group-item">Current isolated: {props.latestInfoByName.current_isolated}</li>
                <li className="list-group-item">current quarantined: {props.latestInfoByName.current_quarantined}</li>
                <li className="list-group-item">current released: {props.latestInfoByName.current_vent}</li>
                <li className="list-group-item">Total death: {props.latestInfoByName.ncumul_deceased}</li>
                </ul>

        </div>
         
    )
}

export default EachContonCart