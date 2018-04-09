import React, { Component } from 'react';
import './BodySearch.css';

import DropdownButton from './../DropdownButton/DropdownButton';

class BodySearch extends Component{
    constructor(props){
        super(props);
        
        this.predicateFields = ['User email', 'screen width', 'screen heigth', '# of visits', 'First Name', 'Last Name', 'Page Response time (ms)', 'Domain', 'Page Path'];
        this.sqlItems = ['id', 'user_email', 'user_first_name', 'user_last_name', 'screen_width', 'screen_heigth', 'visit', 'page_Response', 'domain', 'path'];
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
                <DropdownButton listItems={this.predicateFields}
                                dropdownTitle={this.searchTitle}
                                className="d-inline" />
                <DropdownButton listItems={this.sqlItems}
                                dropdownTitle={this.sqlTitle}
                                className="d-inline" />
                <input type="text" placeholder="Please select" />
                <button>And</button>
                <input type="text" placeholder="Please select" />
                <button className="btn btn-primary d-block"
                        id="and-button">Add</button>
            </div>
        );
    }
};

export default BodySearch;