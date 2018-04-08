import React from 'react';

const Footer = () => {
    return(
        <div>
            <span><p>Returned 4999 results</p></span>
            <span>
                <button className="btn btn-sm">Export</button>
                <button className="btn btn-light btn-sm">Save Preset</button>
                <button className="btn btn-primary btn-sm">Search</button>
            </span>
        </div>
    );
};

export default Footer;