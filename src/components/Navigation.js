import React from 'react'
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#1">Covid-19 Switzerland</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/">Overview Situation <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/list">List of countries and areas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/symptions">Symptoms</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/provention">Protections</Link>
                    </li>
                </ul>
            </div>
            </nav>
    )
}

export default Navigation;