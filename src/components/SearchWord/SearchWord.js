import React from 'react';
import './SearchWord.css';

import DropdownButton from './../DropdownButton/DropdownButton';

const SearchWord = (props) => {
    return(
        <div className="flex">
            
            <div className="d-inline row-item">
                <DropdownButton listItems={props.verbWords}
                                className="d-inline row-item" />
            </div>
            
            <div className="d-inline row-item">
            
            <input className="form-control d-inline row-item input-item"
                   id="word-search"
                   type="text" 
                   placeholder="" />
            </div>
        </div>
            
    );
};

export default SearchWord;
