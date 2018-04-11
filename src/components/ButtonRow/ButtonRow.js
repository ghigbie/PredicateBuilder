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
        return(
            <div className="input-group row-item">
                    
                    <DropdownButton listItems={this.props.subjectFields}
                                    className="d-inline" />
                    
                    {this.state.isWord && <div className="d-inline"> <DropdownButton listItems={this.props.subjectFields}
                                                          className="d-inline" />}
                                                          
                    <input className="form-control d-inline row-item input-item"
                           type="text" 
                           placeholder="Please select" />
                           
                    <button className="btn btn-default row-item">And</button>
                    
                    <input className="form-control d-inline row-item input-item"
                           type="text" 
                           splaceholder="Please select" />
            </div>
        );
    }
}

export default ButtonRow;