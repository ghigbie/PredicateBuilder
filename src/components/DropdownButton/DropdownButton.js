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
               {props.dropdownTitle}
            </a>
                
            <div className="dropdown-menu" 
                 aria-labelledby="dropdownMenuLink">
                {props.listItems.map((item, index) => <a key={index} className="dropdown-item" href="#">{item}</a>)}
            </div>
        </div>  
    );
};

export default DropdownButton;