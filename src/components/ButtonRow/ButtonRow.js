import React, { Component } from 'react';
import './ButtonRow.css';

import SearchNumber from './../SearchNumber/SearchNumber';
import SearchWord from './../SearchWord/SearchWord';

class ButtonRow extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            isWord: true,
            value: 'User email'
        };
    }
    
    handleChange(event){
        let isWordEntered;
        let newValue = event.target.value;
        console.log(event.target.value);
        if(['User email','First Name','Last Name','Domain','Path'].includes(event.target.value)){
            isWordEntered = true;
        }else{
            isWordEntered = false;
        }
        this.setState(() => ({isWord: isWordEntered, value: newValue}));
    }
    
    render(){
        const searchWord = (
                <SearchWord subjectFields={this.props.subjectFields}
                            searchTermStart={this.state.value}
                            sqlItems={this.props.sqlItems}
                            verbWords={this.props.verbWords}
                            verbNumbers={this.props.verbNumbers}
                            className="button-row"/>);
        
        const searchNumber = (
                <SearchNumber subjectFields={this.props.subjectFields}
                              searchTermStart={this.state.value}
                              sqlItems={this.props.sqlItems}
                              verbWords={this.props.verbWords}
                              verbNumbers={this.props.verbNumbers}
                              className="button-row"/>);
        
        return(
            <div className="input-group row-item flex">
                     <select 
                             onChange={(event) =>{this.handleChange(event)}} 
                             className="custom-select max-wide">
                             
                        
                        {this.props.subjectFields.map((item, index) => <option key={index} 
                                                                               value={item.name}>{item.name}</option>)}
                    </select>
                    
                    
                    {this.state.isWord ? searchWord : searchNumber}
                           
            </div>
        );
    }
}

export default ButtonRow;