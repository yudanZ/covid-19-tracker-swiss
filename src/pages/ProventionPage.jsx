import React from 'react';
import HygieCart from '../components/HygieCart';
import { hygienRules } from '../database/data';
import './proventionPage.css';

const ProventionPage = () => {
    return (
        <div className='provention-page'>
            <h2>Protect yourself and others</h2>
            <p>Continue to follow the hygiene and social distancing rules. You can best protect yourself from infection by regularly washing your hands with soap and following the rules on social distancing. </p>
            <div className='rules-container'>
                <h2>Hygiene rules and how to behave</h2>
                <p>The Federal Office of Public Health recommends simple measures to prevent the spread of the new coronavirus.</p>
                <div className='carts-container'>
                    {hygienRules.map( rule => <HygieCart rule = {rule}/>)}
                </div>
                
                
            </div>
        </div>
    )
}

export default ProventionPage