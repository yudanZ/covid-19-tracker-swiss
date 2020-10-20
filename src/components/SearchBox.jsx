import React from 'react';
import './searchBox.css';

const SearchBox = ({searchChange}) => {
    //console.log(currentDate)
    return (
        <div className='input_container'>
            <input 
                arial-label='search countries and areas'
                className='form-control' 
                type='search' 
                placeholder='search countries and areas'
                onChange = {searchChange} 
                
            />
        </div>
        
    )
}

export default SearchBox;

