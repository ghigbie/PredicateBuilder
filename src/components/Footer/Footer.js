import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <footer className="row footer">
            <p className="d-inline grey-text col-md-6">Returned 4999 results</p>
            <div className="d-inline float-right col-md-6">
                <button className="btn btn-sm footer-button">Export</button>
                <button className="btn btn-light btn-sm footer-button button-wide">Save Preset</button>
                <button className="btn btn-primary btn-sm footer-button button-wide">Search</button>
            </div>
        </footer>
    );
};

export default Footer;