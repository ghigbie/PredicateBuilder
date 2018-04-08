import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <footer>
            <p className="d-inline">Returned 4999 results</p>
            <div className="d-inline float-right" >
                <button className="btn btn-sm">Export</button>
                <button className="btn btn-light btn-sm">Save Preset</button>
                <button className="btn btn-primary btn-sm">Search</button>
            </div>
        </footer>
    );
};

export default Footer;