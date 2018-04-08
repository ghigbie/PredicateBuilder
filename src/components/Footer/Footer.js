import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <footer className="row footer">
            <p className="col-md-6 d-inline grey-text">Returned 4999 results</p>
            <div className="col-md-6 d-inline button-holder">
                <button className="btn btn-primary btn-sm float-right footer-button button-wide">Search</button>
                <button className="btn btn-light btn-sm float-right footer-button button-wide">Save Preset</button>
                <button className="btn btn-sm float-right footer-button">Export</button>
            </div>
        </footer>
    );
};

export default Footer;