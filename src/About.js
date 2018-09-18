import React, { Component } from 'react'
import './App.css'
import './AboutStyle.css'
import './animated.css'
import Navbar from './Navbar'
import DescriptionAbout from './DescriptionAbout'
import Footer from './Footer'


class About extends Component {


    render() {
        return (
            <div id="about-container" className="text-page-container">
               <Navbar
                    currentPage = 'about' />
               
               <div className="content">
                   <DescriptionAbout />
               </div>
               
               <Footer />
                
            </div>

        )
    }

}

export default About;