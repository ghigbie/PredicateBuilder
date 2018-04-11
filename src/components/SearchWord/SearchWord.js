import React, { Component }from 'react';
import './SearchWord.css';

import DropdownButton from './../DropdownButton/DropdownButton';

class SearchWord extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerm: this.props.searchTermStart
        };
    }
    
    render(){
        return(
            <div className="flex">
                
                <div className="d-inline row-item">
                    <DropdownButton listItems={this.props.verbWords}
                                    className="d-inline row-item" />
                </div>
                
                <div className="d-inline row-item">
                
                <input className="form-control d-inline row-item input-item"
                       id="word-search"
                       type="text" 
                       placeholder={this.props.searchTerm} />
                </div>
            </div>
                
        );
    }
};

export default SearchWord;
