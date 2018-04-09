import React from 'react';
import './DropdownButton.css';

const DropdownButton = (props) => {
    return(
        <div className="dropdown show d-inline">
            <a className="btn btn-secondary dropdown-toggle" 
               href="#" 
               role="button" 
               id="dropdownMenuLink" 
               data-toggle="dropdown" 
               aria-haspopup="true" 
               aria-expanded="false">
               Dropdown link
            </a>
                
            <div clasName="dropdown-menu" 
                 aria-labelledby="dropdownMenuLink">
                {props.fields.map((field, index) => <a key={index} className="dropdown-item" href="#">{field}</a>)}
            </div>
        </div>  
    );
};

export default DropdownButton;