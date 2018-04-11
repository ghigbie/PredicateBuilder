import React, { Component } from 'react';
import './ButtonRow.css';

import DropdownButton from './../DropdownButton/DropdownButton';
import SearchNumber from './../SearchNumber/SearchNumber';
import SearchWord from './../SearchWord/SearchWord';

class ButtonRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            isWord: true
        };
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
                    
                    <DropdownButton listItems={this.props.subjectFields}
                                    className="d-inline" />
                    
                    {this.state.isWord ? searchWord : searchNumber}
                                                          
            </div>
        );
    }
}

export default ButtonRow;