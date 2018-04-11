import React, { Component } from 'react';
import {subjectNames, sqlNames} from './../../Services/data-service';
import './SearchNumber.css';

import DropdownButton from './../DropdownButton/DropdownButton';

class SearchNumber extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerm: this.props.searchTermStart
        };
    }

    render(){
        return(
        <div className="flex">
            <button className="btn btn-default d-inline row-item">Is</button>

            <DropdownButton listItems={this.props.verbNumbers}
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
    }
}

export default SearchNumber;
