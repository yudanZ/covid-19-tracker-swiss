import React from 'react';

const DropDown = (props) => {
    return (
        <div className="dropdown">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select Contons
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Genève</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Aargau</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Graubünden</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Basel-Stadt</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Jura</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Zürich</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Valais</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Zug</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Fribourg</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Vaud</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Neuchâtel</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >St. Gallen</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Thurgau</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Nidwalden</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Bern</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Schwyz</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Ticino</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Schaffhausen</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Glarus</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Luzern</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Solothurn</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Uri</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Obwalden</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Appenzell Innerrhoden</a>
                    <a className="dropdown-item" href="#1" onClick= {props.onButtonClick} >Appenzell Ausserrhoden</a>
                </div>
            </div>
        </div> 

    )
}

export default DropDown