import React, { Component } from 'react';
import './ButtonRow.css';

import DropdownButton from './../DropdownButton/DropdownButton';

                               
class ButtonRow extends Component{
    constructor(props){
        super(props);
        this.handleChangeToNumber = this.handleChangeToNumber.bind(this);
        this.handleChangetoWord = this.handleChangetoWord.bind(this);
        this.state = {
            isWord: true,
            queryString: ''
        };
    }
        
    handleChangeToNumber(){
        this.setState(() => ({isWord: false}));
    }
    
    handleChangetoWord(){
        this.setState(() => ({isWord: true}));
    }
    
        
    
    render(){
        
        const wordSubjectDrop = (<DropdownButton listItems={this.props.subjectFields}
                                                 className="d-inline" />);
        
        const wordVerbDrop = (<DropdownButton listItems={this.props.verbWords}
                                                 className="d-inline" />);
                  
        const numberSubjectDrop = (<div className="d-inline row-item">
                            <DropdownButton listItems={this.props.sqlItems}
                                            className="d-inline" />
                        </div>);         
        
        return(
            <div className="input-group row-item">
                    {this.state.isWord && wordSubjectDrop}
                    
                    {this.state.isWord && wordVerbDrop}
                    
                        <div className="d-inline row-item">
                            <DropdownButton listItems={this.props.sqlItems}
                                            className="d-inline" />
                        </div>
                    
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