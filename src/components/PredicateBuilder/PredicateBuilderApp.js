import React, { Component } from 'react';
import './PredicateBuilderApp.css';

import Header from './../Header/Header';
import Body from './../Body/Body'
import Footer from './../Footer/Footer';

class PredicateBuilderApp extends Component{
    render(){
        return(
            <div className="container-fluid main-app">
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default PredicateBuilderApp;