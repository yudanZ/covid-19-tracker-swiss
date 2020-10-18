import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <div className='text-center footer-container'>
           
            <div className="row">
                <div className="col-12">
                    <div className="footer__icons__container">
                        <a type="button" className="btn btn-secondary" href='https://github.com/yudanZ/covid-19-tracker-swiss' target="_blank" rel='noopener noreferrer'>Contribute on Github</a>
                        <a type="button" className="btn btn-primary" href='https://twitter.com/intent/tweet?text=Get the latest Covid-19 updates with Covid-19 Swiss Tracker!&url=https://yudanz.github.io/covid-19-tracker-swiss/' target="_blank" rel='noopener noreferrer'>Share on Twitter</a>
                        <a type="button" className="btn btn-warning" href='https://github.com/yudanZ/covid-19-tracker-swiss/issues/new' target="_blank" rel='noopener noreferrer'>Report an Issue</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="text-center col-12">
                <div className="footer__text">
                    <p className="mb-0">Copyright &copy; 2020 by Yudan Zhai
                        . <a href="https://www.yudan.ch/">Designed by Yudan Zhai</a>
                    </p>
                </div>
                </div>  
            </div>
        </div>
    )
}



export default Footer;