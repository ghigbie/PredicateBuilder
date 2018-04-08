import React from 'react';
//import './Header.css'

const Header = () => {
    return(
        <div className="header">
            <div className="">
                <h5 className="d-inline float-left">SEARCH FOR SESSIONS</h5>
                <button className="d-inline btn btn-primary btn-sm float-right">Today</button>
            </div>
        </div>
    );
};

export default Header;