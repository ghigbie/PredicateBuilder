import React, { Component } from 'react';
import './BodySearch.css';
import { subjectFields, sqlItems, verbWords, verbNumbers} from './../../Services/data-service';

import DropdownButton from './../DropdownButton/DropdownButton';

class BodySearch extends Component{
    constructor(props){
        super(props);
        
        this.subjectFields = subjectFields;
        this.sqlItems = sqlItems;
        this.verbWords = verbWords;
        this.verbNumbers = verbNumbers;
        this.searchTitle = 'Search';
        this.sqlTitle = 'SQL Search';
        this.predicateFieldBuilder = this.predicateFieldBuilder.bind(this);
    }
    
    predicateFieldBuilder(){
       return this.predicateField.map((field, index) => <a key={index} className="dropdown-item" href="#">{field}</a>);
    }
    
    render(){
        return(
            <div>
                <button className="btn btn-basic">-</button>
                <DropdownButton listItems={this.subjectFields}
                                dropdownTitle={this.searchTitle}
                                className="d-inline row-item" />
                <DropdownButton listItems={this.sqlItems}
                                dropdownTitle={this.sqlTitle}
                                className="d-inline row-item" />
                <input className="form-control d-inline row-item input-item"
                       type="text" 
                       placeholder="Please select" />
                <button className="btn btn-default row-item">
                        And</button>
                <input className="form-control d-inline row-item input-item"
                       type="text" 
                       placeholder="Please select" />
                <button className="btn btn-primary d-block"
                        id="and-button">Add</button>
            </div>
        );
    }
};

export default BodySearch;