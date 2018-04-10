import React from 'react';
import './DropdownButton.css';

const DropdownButton = (props) => {
    return(
        
        <div className="dropdown d-inline">
            <select className="custom-select">
                <option defaultValue>Choose...</option>
                {props.listItems.map((item, index) => <option key={index} 
                                                              value={item.name}>{item.name}</option>)}
            </select>
        </div>  
    );
};

export default DropdownButton;