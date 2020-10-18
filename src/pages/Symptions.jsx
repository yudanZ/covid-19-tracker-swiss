import React from 'react';
import './symptions.css';
const SymptionsPage = () => {
    return (
        <div className='symptions-page'>
            <div className ='symptions-head-info'>
                <h2>Symptoms of coronavirus disease</h2>
                <div className='check-symptions'>
                    <a className='text-center' target="_blank" rel='noopener noreferrer' href='https://check.foph-coronavirus.ch/screening'> Are you experiencing symptoms? Take the coronavirus check</a>
                </div>
            </div>
            
            <div className='symptions-container'>
                <div className='vaccine-info'>
                    <p>There is currently no authorised vaccine against the new coronavirus. Many research institutions around the world are working on the development of a vaccine against Covid-19. At present, it cannot be said exactly when a vaccine will be available.</p>
                </div>
                <p>There is a very wide range of symptoms caused by the new coronavirus.</p>
                <p>Symptoms can vary in severity and can even be mild. Complications, such as pneumonia, are also possible.</p>
                <p>Contact your doctor if you have any symptoms about which you are concerned.</p>
                <p><strong>The most common symptoms are:</strong></p>
                <ul className='text-left'>
                    <li>Respiratory illness symptoms (sore throat, cough (usually dry), shortness of breath, chest pain)</li>
                    <li>High temperature</li>
                    <li>Sudden loss of sense of smell and/or taste</li>
                </ul>

                <p><strong>Other symptoms may include:</strong></p>
                <ul  className='text-left'>
                    <li>Headache</li>
                    <li>General weakness, feeling unwell</li>
                    <li>Aching muscles</li>
                    <li>Gastrointestinal symptoms (nausea, vomiting, diarrhoea, stomach ache)</li>
                    <li>Head cold</li>
                    <li>Skin rash</li>
                </ul>

                <p styple={{fontSize: '10px'}}>These are for informational purposes only. Consult your local medical authority for advice. (Source: Federal Office of Public Health FOPH)</p>
            </div>
        </div>
    )
}

export default SymptionsPage;