import React, { Component } from 'react'
import './App.css'
import './HomeStyle.css'
import './animated.css'
import Navbar from './Navbar'
import DescriptionHome from './DescriptionHome'
import Footer from './Footer'




class Home extends Component {

    
    

    render() {
        return (
            <div id="home-container" className="text-page-container">
               <Navbar
                    currentPage = 'home' />
               
               <div className="content">
                   <DescriptionHome />
                   <Footer />
               </div>
               
                
            </div>

        )
    }

}

export default Home;