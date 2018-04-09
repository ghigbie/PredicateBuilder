import React, { Component } from 'react';
import './BodySearch.css';

class BodySearch extends Component{
    render(){
        return(
            <div>
                <button>+</button>
                <button></button>
                <button></button>
                <input type="text" placeholder="Please select" />
                <button>And</button>
                <input type="text" placeholder="Please select" />
            </div>
        );
    }
};

export default BodySearch;