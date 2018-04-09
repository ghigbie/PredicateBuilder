import React from 'react';
import './Body.css';

import BodySearch from './../BodySearch/BodySearch';
import SideTable from './../SideTable/SideTable';

const Body = (props) => {
    return(
        <div className="row">
            <div className="col-md-10">
                <BodySearch />
            </div>
            <div className="col-md-2">
                <SideTable />
            </div>
        </div>
    );
};

export default Body;