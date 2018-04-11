import React from 'react';

import DropdownButton from './../DropdownButton/DropdownButton';

const SearchWord = (props) => {
    return(
        <div>
            
            <div className="d-inline row-item">
                <DropdownButton listItems={props.verbWords}
                                className="d-inline row-item" />
            </div>
                    
            <input className="form-control d-inline row-item input-item"
                   id="word-search"
                   type="text" 
                   placeholder="Please select" />
        </div>
            
    );
};

export default SearchWord;
