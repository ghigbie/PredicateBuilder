import React, { Component } from 'react';
import './BodySearch.css';

import DropdownButton from './../DropdownButton/DropdownButton';

class BodySearch extends Component{
    constructor(props){
        super(props);
        
        this.predicateFields = ['User email', 'screen width', 'screen heigth', '# of visits', 'First Name', 'Last Name', 'Page Response time (ms)', 'Domain', 'Page Path'];
        this.searchTitle = 'Search';
        this.sqlTitle = 'SQL Search';
        this.predicateFieldBuilder = this.predicateFieldBuilder.bind(this);
    }
    
    predicateFieldBuilder(){
       return this.predicateField.map((field, index) => <a key={index} className="dropdown-item" href="#">{field}</a>);
    }
    
    render(){
        return(
            <div>
                <button className="btn btn-basic">+</button>
                <DropdownButton items={this.predicateFields}
                                dropdownTitle={this.searchTitle}
                                className="d-inline" />
                <DropdownButton items={this.sqlItems}
                                dropdownTitle={this.sqlTitle}
                                className="d-inline" />
                <input type="text" placeholder="Please select" />
                <button>And</button>
                <input type="text" placeholder="Please select" />
            </div>
        );
    }
};

export default BodySearch;