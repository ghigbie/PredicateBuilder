import React, { Component } from 'react';
import './BodySearch.css';
import { subjectFields, sqlItems, verbWords, verbNumbers} from './../../Services/data-service';

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
        this.handleAddRow = this.handleAddRow.bind(this);
        this.handleRemoveRow = this.handleRemoveRow.bind(this);
        this.state = {
            rows: [0],
            count: 0
        };
    }
    
    handleAddRow(){
        this.setState((prevState) => {count: prevState.count++});
        this.setState((prevState) => ({rows: prevState.rows.concat(this.state.count)}));
    }
    
    handleRemoveRow(indexToRemove){
        this.setState((prevState) => ({
            rows: prevState.rows.filter((index) => indexToRemove !== index)
        }));
    }
    
    render(){
        return(
            <div>
                {this.state.rows.map((row, index) => 
                    (<div key={index}
                          className="button-row">
                        <div className="d-inline-block">
                            <button className="btn btn-basic"
                                    onClick={(e) => {this.handleRemoveRow(index);}}>-</button>
                        </div>
                        <div className="d-inline-block">
                        <ButtonRow subjectFields={this.subjectFields}
                                   sqlItems={this.sqlItems}
                                   verbWords={this.verbWords}
                                   verbNumbers={this.verbNumbers}
                                   searchTitle={this.searchTitle}
                                   sqlTitle={this.sqlTitle}
                                   removeRow={this.handleRemoveRow}
                                   className="d-inline button-row"/>
                        </div>
                    </div>))}
                
                <button className="btn btn-primary d-block"
                        id="and-button"
                        onClick={this.handleAddRow}>Add</button>
                        
            </div>
        );
    }
}

export default BodySearch;