import React from 'react';
import './hygieCart.css';

const HygieCart = ({rule}) => {
    return (
        <div className="hygie-cart" style={{width: '16rem'}}>
            <img src={rule.imageUrl} className="" alt="..." />
            <div class="hygie-text">
               
                <p >{rule.description}</p>
                
            </div>
        </div>
    )
}

export default HygieCart