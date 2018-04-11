import React from 'react';
import './ButtonRow.css';

import DropdownButton from './../DropdownButton/DropdownButton';

                               
const ButtonRow = (props) => {
    return(
        <div className="input-group">
            <button className="btn btn-basic"
                    onClick={props.removeRow}>-</button>
                <DropdownButton listItems={props.subjectFields}
                                className="d-inline" />
                                
                <div className="d-inline row-item">
                        <DropdownButton listItems={props.sqlItems}
                                        className="d-inline" />
                </div>
                
                <input className="form-control d-inline row-item input-item"
                       type="text" 
                       placeholder="Please select" />
                <button className="btn btn-default row-item">And</button>
                
                <input className="form-control d-inline row-item input-item"
                       type="text" 
                       splaceholder="Please select" />
        </div>
    );
}; 

export default ButtonRow;