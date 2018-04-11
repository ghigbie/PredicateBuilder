import React, { Component } from 'react';
import './BodySearch.css';
import { subjectFields, sqlItems, verbWords, verbNumbers, bools} from './../../Services/data-service';

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
        this.handleAddRow = this.handleAddRow.bind(this);
        this.handleRemoveRow = this.handleRemoveRow.bind(this);
        this.state = {
            rows: [1],
            count: 1
        };
    }
    
    handleVisibility(){
      this.setState((prevState) => {
          return {
              visibility: !prevState.visibility
          };
      });
    }
    
    handleAddRow(){
        this.setState((prevState) => {count: prevState.count++});
        this.setState((prevState) => {
            return {rows: prevState.rows.concat(this.state.count)};
        });
    }
    
    handleRemoveRow(){
        console.log('handle remove row called');
        this.setState(() => {
            rows: bools
        });
    }
    
    render(){
        return(
            <div>
                {this.state.rows.map((row, index) => 
                    (<div key={index}
                          className="d-block">
                        <ButtonRow subjectFields={this.subjectFields}
                                   sqlItems={this.sqlItems}
                                   verbWords={this.verbWords}
                                   searchTitle={this.searchTitle}
                                   sqlTitle={this.sqlTitle}
                                   removeRow={this.handleRemoveRow}
                                   className="button-row"/>
                    </div>))}
                
                <button className="btn btn-primary d-block"
                        id="and-button"
                        onClick={this.handleAddRow}>Add</button>
                        
            </div>
        );
    }
}

export default BodySearch;