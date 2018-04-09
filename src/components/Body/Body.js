import React from 'react';
import './Body.css';

import SideTable from './../SideTable/SideTable';

const Body = (props) => {
    return(
        <div className="row">
            <div className="col-md-10">
                <h1>There will be some stuff here!</h1>
            </div>
            <div className="col-md-2">
                <SideTable />
            </div>
        </div>
    );
};

export default Body;