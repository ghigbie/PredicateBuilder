import React, { Component } from 'react';
import './BodySearch.css';
import { subjectFields, sqlItems, verbWords, verbNumbers} from './../../Services/data-service';

//import DropdownButton from './../DropdownButton/DropdownButton';
import ButtonRow from './../ButtonRow/ButtonRow';

class BodySearch extends Component{
    constructor(props){
        super(props);
        
        this.subjectFields = subjectFields;
        this.sqlItems = sqlItems;
        this.verbWords = verbWords;
        this.verbNumbers = verbNumbers;
        this.searchTitle = 'Search';
        this.sqlTitle = 'SQL Search';
        this.handleAddButtonRow = this.handleAddButtonRow.bind(this);
    }
    
    handleAddButtonRow(){
        return (<div className="d-block">
                    <ButtonRow subjectFields={this.subjectFields}
                               sqlItems={this.sqlItems}
                               verbWords={this.verbWords}
                               searchTitle={this.searchTitle}
                               sqlTitle={this.sqlTitle}/>
                </div>);
    }
    
    render(){
        return(
            <div>
                <div className="d-block">
                    <ButtonRow subjectFields={this.subjectFields}
                               sqlItems={this.sqlItems}
                               verbWords={this.verbWords}
                               searchTitle={this.searchTitle}
                               sqlTitle={this.sqlTitle}/>
                </div>  
                
                <button className="btn btn-primary d-block"
                        id="and-button"
                        onClick={this.addButtonRow}>Add</button>
            </div>
        );
    }
}

export default BodySearch;