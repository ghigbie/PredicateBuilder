import React from 'react';
import './SearchNumber.css';

import DropdownButton from './../DropdownButton/DropdownButton';

const SearchNumber= (props) => {
    return(
        <div className="flex">
        
            <button className="btn btn-default d-inline row-item">Is</button>
            
            
            <DropdownButton listItems={props.verbNumbers}
                            className="d-inline row-item" />
            
            <input className="form-control d-inline row-item input-item"
                   type="text" 
                   placeholder="" />
            
            <button className="btn btn-default d-inline row-item">And</button>
                    
            <input className="form-control d-inline row-item input-item"
                   type="text" 
                   placeholder="100" />
        </div>
            
    );
};

export default SearchNumber;
