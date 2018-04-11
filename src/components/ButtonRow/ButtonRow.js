import React, { Component } from 'react';
import './ButtonRow.css';

import DropdownButton from './../DropdownButton/DropdownButton';
import SearchNumber from './../SearchNumber/SearchNumber';
import SearchWord from './../SearchWord/SearchWord';

class ButtonRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            isWord: true,
            searchTerm: 'moo'
        };
    }
    
    handleChange(e){
        let isWordEntered;
        if(['User email','First Name','Last Name','Domain','Path Path'].includes(e.target.value)){
            isWordEntered = true;
        }else{
            isWordEntered = false;
        }
        
        this.setState(() => {
              return{ 
                searchTerm:  e.target.value,
                isWord: isWordEntered
              };
        });
        console.log('Moo1', this.state.searchTerm);
    }
    
    render(){
        const searchWord = (
                <SearchWord subjectFields={this.props.subjectFields}
                            sqlItems={this.props.sqlItems}
                            verbWords={this.props.verbWords}
                            verbNumbers={this.props.verbNumbers}
                            removeRow={this.props.handleRemoveRow}
                            className="button-row"/>);
        
        const searchNumber = (
                <SearchNumber subjectFields={this.props.subjectFields}
                              sqlItems={this.props.sqlItems}
                              verbWords={this.props.verbWords}
                              verbNumbers={this.props.verbNumbers}
                              removeRow={this.props.handleRemoveRow}
                              className="button-row"/>);
        
        return(
            <div className="input-group row-item flex">
                    
                     <select value={this.state.selectValue} 
                             onChange={(e) => {this.handleChange(e)}} 
                             className="button-row">
                
                        <option defaultValue>Choose...</option>
                         {this.props.subjectFields.map((item, index) => <option key={index} 
                                                                                value={item.name}>{item.name}</option>)}
                    </select>
                    
                    {this.state.isWord ? searchWord : searchNumber}
                                                          
            </div>
        );
    }
}

export default ButtonRow;