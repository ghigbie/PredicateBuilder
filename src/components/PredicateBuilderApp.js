import React, { Component } from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

class PredicateBuilderApp extends Component{
    render(){
        return(
            <div className="container-fluid">
                <Header />
                <h1>All dogs are awesome!</h1>
                <Footer />
            </div>
        );
    }
}

export default PredicateBuilderApp;