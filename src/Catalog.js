import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'


class Catalog extends Component {


    render() {
        return (
            <div id='catalog-container'>
                
                <Navbar />
               
                <div id='map-div' className='map'>
                </div>
                
            </div>
        );
    }

}

export default Catalog