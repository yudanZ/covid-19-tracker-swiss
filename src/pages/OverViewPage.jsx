import React from 'react';
import OverView from '../containers/OverView';
import ChartPanel from '../containers/ChartPanel';

const OverViewPage = () => {
    return (
        <div className='overview-page'>
            <OverView />
            <ChartPanel/>
        </div>
    )
}

export default OverViewPage