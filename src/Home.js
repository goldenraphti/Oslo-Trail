import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './App.css'
import './animated.css'
import Navbar from './Navbar'
import DescriptionHome from './DescriptionHome'
import Footer from './Footer'




class Home extends Component {

    
    

    render() {
        return (
            <div id="home-container" className="text-page-container">
               <Navbar />
               
               <div className="content">
                   <DescriptionHome />
               </div>
               
               <Footer />
                
            </div>

        )
    }

}

export default Home;