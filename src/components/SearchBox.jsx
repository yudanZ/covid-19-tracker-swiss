import React from 'react';
import './searchBox.css';

const SearchBox = ({searchChange}) => {
    //console.log(currentDate)
    return (
        <div className='input_container'>
            <input 
                className='form-control' 
                type='search' 
                placeholder='search countries and areas'
                onChange = {searchChange} 
                
            />
        </div>
        
    )
}

export default SearchBox;

