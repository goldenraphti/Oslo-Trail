import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home'
import Catalog from './Catalog'
import About from './About'

class App extends Component {
    render() {
        return (
          <div className="app">

                 <Route exact  path="/" render={() => (
                    <Home />
                )} />

                <Route path="/catalog" render={() => (
                    <Catalog />
                )} />
                
                <Route path="/about" render={() => (
                    <About />
                )} />
          </div>
        )
    }
}

export default App;