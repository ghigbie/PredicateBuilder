console.log('app js js is running!');
import React from 'react';
import ReactDOM from 'react-dom';
import PredicateBuilderApp from './components/PredicateBuilderApp.js';

const appRoot = document.getElementById('react-container');
ReactDOM.render(<PredicateBuilderApp />, appRoot);