import React from 'react';

import DropdownButton from './../DropdownButton/DropdownButton';

const SearchWord = () => {
    return(
        <div>
            
            <div className="d-inline row-item">
                <DropdownButton listItems={props.verbWords}
                                    className="d-inline row-item" />
            </div>
            
            <button className="btn btn-default row-item">And</button>
                    
            <input className="form-control d-inline row-item input-item"
                   type="text" 
                   placeholder="Please select" />
        </div>
            
    );
};

export default SearchWord;


import React, { Component } from 'react';
import './ButtonRow.css';

import DropdownButton from './../DropdownButton/DropdownButton';

                               
class ButtonRow extends Component{
    constructor(props){
        super(props);
        this.handleChangeToNumber = this.handleChangeToNumber.bind(this);
        this.handleChangetoWord = this.handleChangetoWord.bind(this);
       // this.handleChange = this.handleChange.bind(this);
        this.state = {
            isWord: true,
            queryString: ''
        };
    }
        
    handleChangeToNumber(){
        this.setState(() => ({isWord: false}));
    }
    
    handleChangeToWord(){
        this.setState(() => ({isWord: true}));
    }
    
    // handleChange(value){
    //     value.type === 'text'? this.handleChangeToWord() : this.handleChangeToNumber();
    // }
    
    render(){
        
        const wordRender = (
            <div>
                <div className="d-inline row-item">
                    <DropdownButton listItems={this.props.subjectFields}
                                    className="d-inline row-item" /> 
                </div>
                <input className="form-control d-inline row-item input-item"
                           type="text" 
                           placeholder="Please select" />
            </div>
        );
        
        const numberRender = (
            <div>
            
                <div className="d-inline row-item">
                    <DropdownButton listItems={this.props.verbWords}
                                    className="d-inline row-item" />
                </div>
            
                <button className="btn btn-default row-item">And</button>
                    
                <input className="form-control d-inline row-item input-item"
                       type="text" 
                       placeholder="Please select" />
            </div>
            
        );
           
        return(
            <div className="d-inline input-group row-item">
                    
                <div className="d-inline row-item">
                    <DropdownButton listItems={this.props.subjectFields}
                                    className="d-inline row-item"  />
                </div>
                
                {this.state.isWord ? wordRender : numberRender}

                    
            </div>
        );
    }
}

export default ButtonRow;