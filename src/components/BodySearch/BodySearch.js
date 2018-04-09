import React, { Component } from 'react';
import './BodySearch.css';

class BodySearch extends Component{
    constructor(props){
        super(props);
        
        this.predicateFields = ['User email', 'screen width', 'screen heigth', '# of visits', 'First Name', 'Last Name', 'Page Response time (ms)', 'Domain', 'Page Path'];
        this.predicateFieldBuilder = this.predicateFieldBuilder.bind(this);
    }
    
    predicateFieldBuilder(){
       return this.predicateField.map((field, index) => <a key={index} className="dropdown-item" href="#">{field}</a>);
    }
    
    render(){
        return(
            <div>
                <button className="btn btn-basic">+</button>
                <DropdownButton fields={this.predicateFields} />
                
                <div className="dropdown show d-inline">
                  <a className="btn btn-secondary dropdown-toggle" 
                     href="#" 
                     role="button" 
                     id="dropdownMenuLink" 
                     data-toggle="dropdown" 
                     aria-haspopup="true" 
                     aria-expanded="false">
                    Dropdown link
                  </a>
                
                  <div clasName="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {this.predicateFields.map((field, index) => <a key={index} className="dropdown-item" href="#">{field}</a>)}
                  </div>
                </div>

                <button className="btn btn-secondary dropdown-toggle"></button>
                <input type="text" placeholder="Please select" />
                <button>And</button>
                <input type="text" placeholder="Please select" />
            </div>
        );
    }
};

export default BodySearch;