import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './App.css'
import Navbar from './Navbar'
import DescriptionHome from './DescriptionHome'
import Footer from './Footer'

class Home extends Component {
    
    state= {
        centerMap: {lat: 59.9028735, lng: 10.7248394},
        markers: [],
        beachesList:[{title: 'tjuvholmen', id:101, location: {lat: 59.906125, lng: 10.719755} , foursquareID : '522ef63211d25e58949693a2'},
                     {title: 'sørenga', id:102, location: {lat: 59.900957, lng: 10.751031}, foursquareID: '53c0f4fe498e2e581dceec59'},
                     {title: 'hvervenbukta', id:103, location: {lat: 59.833907, lng: 10.77235} , foursquareID: '4bcae6c1937ca5939f9ca892'},
                     {title: 'langøyene', id:104, location: {lat: 59.871664, lng: 10.721499} , foursquareID: '4b0588b5f964a52046d522e3'},
                     {title: 'paradisbukta', id:105, location: {lat: 59.901971, lng: 10.665654} , foursquareID: '4b86892bf964a520788e31e3'},
                     {title: 'hovedøya', id:106, location: {lat: 59.895011, lng: 10.725042} , foursquareID: '4c31b9a1213c2d7f2652345d'}
                    ],
        gMap: {},
        largeInfoWindow: {} ,
        sidebarDisplayClass: 'aside-hidden',
        sidebarMenuText:'☰',
        markerToDisplay:{},
        dropdownText:'',
        gMapDisplayClasses: {
            altClass: 'hidden',
            gMapClass: ''
        }
    }

 

    render() {
        return (
            <div id="home-container">
               <Navbar />
               
               <div class="content">
                   <h1>Oslo Trail</h1>
                   <DescriptionHome />
               </div>
               
               <Footer />
                
            </div>

        )
    }

}

export default Home;