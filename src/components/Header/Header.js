import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <header className="header">
            <div className="grey-text">
                <h5 className="d-inline">SEARCH FOR SESSIONS</h5>
                <button className="btn btn-primary btn-sm d-inline float-right">Today</button>
            </div>
            <hr />
        </header>
    );
};

export default Header;