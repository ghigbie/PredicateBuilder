import React from 'react';
import './SearchNumber.css';

import DropdownButton from './../DropdownButton/DropdownButton';

const SearchNumber= (props) => {
    return(
        <div className="flex">
        
            <button className="btn btn-default row-item">Is</button>
            
            <div className="d-inline row-item">
                <DropdownButton listItems={props.verbNumbers}
                                className="d-inline row-item" />
            </div>
            
            <button className="btn btn-default row-item">And</button>
                    
            <input className="form-control d-inline row-item input-item"
                   type="text" 
                   placeholder="Please select" />
        </div>
            
    );
};

export default SearchNumber;
