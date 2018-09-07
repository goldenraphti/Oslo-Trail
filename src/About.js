import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './App.css'
import './animated.css'
import Navbar from './Navbar'
import DescriptionAbout from './DescriptionAbout'
import Footer from './Footer'


class About extends Component {


    render() {
        return (
            <div id="about-container" className="text-page-container">
               <Navbar />
               
               <div className="content">
                   <DescriptionAbout />
               </div>
               
               <Footer />
                
            </div>

        )
    }

}

export default About;