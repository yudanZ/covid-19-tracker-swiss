import React from 'react';
import SearchBox from '../components/SearchBox';
import './listCountries.css';

import { listCountries, otherCountries } from '../database/data';

class ListCountries extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            listCountries: listCountries,
            otherCountries: otherCountries,
            searchFields: ''
        }
    }

    onSearchChange = (e) => {
        //console.log(e.target.value);
        this.setState({searchFields: e.target.value})
    }
    render(){
        const {listCountries, searchFields, otherCountries} = this.state;
        let filterListRegion;
        const filterListCountries = listCountries.filter( listCountry => {
            return listCountry.name.toLowerCase().includes(searchFields.toLowerCase())
        });
        //console.log(filterListCountries);
        if(!filterListCountries.length){
            filterListRegion = listCountries.filter( listCountry => {
                //console.log(listCountry)
                let country = listCountry.region.some( item => 
                    //console.log(item.toLowerCase())
                    item.toLowerCase().includes(searchFields.toLowerCase())
                
                    )
                return country;
            }
                )
        }
        //console.log(filterListRegion);
        const filterResult = filterListCountries.length ? filterListCountries : filterListRegion;
        const filterOtherCountries = otherCountries.filter( listCountry => {
            return listCountry.toLowerCase().includes(searchFields.toLowerCase())
        });//console.log(filterResult)
        return (
            
            <div className='container list-container'>
                <h2>List of countries and areas
                </h2>
                <p className=''>
                The countries and areas with a high risk of infection are set down in the Covid-19 Ordinance on International Passenger Transport Measures. This list is regularly updated. The decisive factor in whether a country is included on the list or not is the data of ECDC (European Centre for Disease Prevention and Control). Areas bordering Switzerland can be exempted from inclusion on the list despite a corresponding incidence of the new coronavirus.

                </p>
                <p>
                If a country is on the list, this includes all of its areas, islands and overseas territories – even if they are not listed separately. Switzerland’s neighbouring countries are exempted from this regulation. In the case of these countries, it is not the entire country that is listed, but rather regions. Further information in this regard can be found on the page
                </p>
                <p><strong> List valid upon arriving in Switzerland from 12.10.2020</strong></p>
                <div>
                    <p className='text-center'>
                        <a className="btn btn-light mr-2" data-toggle="collapse" href="#neighbour" role="button" aria-expanded="false" aria-controls="neighbour">
                        Areas of neighbouring countries
                        </a>
                        
                        <a className="btn btn-light mr-2" data-toggle="collapse" href="#all" role="button" aria-expanded="false" aria-controls="all">
                        Countries and areas
                        </a>
                    </p>
                    <div className="collapse" id="neighbour">
                        <SearchBox searchChange={this.onSearchChange}/>
                        
                        <div className="card card-body">
                            <ul className="list-group">
                            {filterResult.map(
                                (country, index) => <li key= {`country-${index}`} className="list-group-item">
                                <strong>{country.name}</strong>
                                    <ul className="list-group">
                                    {country.region.map((item, index) => 
                                        <li key={`region-${index}`} className="list-group-item">{item}</li>
                                    )}
                                        
                                    </ul>
                                </li>
                            )}
                                
                               
                            </ul>
                        </div>
                    </div>
                    <div className="collapse" id="all">
                    <SearchBox searchChange={this.onSearchChange}/>
                        <div className="card card-body">
                            <ul className="list-group">
                            {
                                filterOtherCountries.map( (item, index) =>
                                    <li key={`otherCountries-${index}`} className="list-group-item">{item}</li> 
                                    )
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
    
}

export default ListCountries;