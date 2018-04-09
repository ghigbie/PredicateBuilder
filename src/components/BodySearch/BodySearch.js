import React, { Component } from 'react';
import './BodySearch.css';

class BodySearch extends Component{
    constructor(props){
        super(props);
        
        this.predicateFields = ['User email', 'screen width', 'screen heigth', '# of visits', 'First Name', 'Last Name', 'Page Response time (ms)', 'Domain', 'Page Path'];
        this.predicateFieldBuilder = this.predicateFieldBuilder.bind(this);
    }
    
    predicateFieldBuilder(){
        const predicateFields = this.predicateField.map((field, index) => <a key={index} className="dropdown-item" href="#">{field}</a>);
    }
    
    render(){
        return(
            <div>
                <button>+</button>
                <button className="btn btn-secondary dropdown-toggle">
                    {this.predicateFieldBuilder}
                </button>
                <button className="btn btn-secondary dropdown-toggle"></button>
                <input type="text" placeholder="Please select" />
                <button>And</button>
                <input type="text" placeholder="Please select" />
            </div>
        );
    }
};

export default BodySearch;