import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import L from 'leaflet';
import MapUI from './MapUI';
import Footer from './Footer'
import {
    FeatureGroup,
    Circle,
  LayerGroup,
  LayersControl,
  Marker,
  Popup,
  Rectangle,
  TileLayer,
} from 'react-leaflet'
// using webpack json loader we can import our geojson file like this
import routesData from './routes/routesData'



class Catalog extends Component {
    
    

    
    state = {
        listToDisplay : routesData.features,
        filter: {},
        selectedRoute: '',
    }


    
    
    componentDidMount() {
        this.retrieveRoutesData();
        this.displayList();
    }

    // when component mount, import all routesData to listToDisplay, before being filtered
    retrieveRoutesData() {
        this.setState({listToDisplay: routesData.features})
    }

    // check if there is a rute selected, else if there is filters selected, and send list of routes to display in consequences filtering the 'routesData' (full list imported from routesData.js)
    displayList = () => {
        
    }
            
    // modify listToDisplay after user have clicked on a route in list
    selectRoute = () => {
        
            
    }
        
    // modify listToDisplay after user have clicked to filter list
    filterListRoutes = () => {
        
    }


    render() {
        return (
            <div id='catalog-container'>
                
                <Navbar />
               
                <MapUI
                   listToDisplay = {this.state.listToDisplay}
                    mellomkollen = {routesData.features[0]}
                    mellomkollenMarker1 = {routesData.features[1].geometry.coordinates}
                    mellomkollenWater = {routesData.features[8].geometry.coordinates}
                    helvetebrua = {routesData.features[2]}
                    helvetebruaMarker1 = {routesData.features[3].geometry.coordinates}
                    helvetebruaMarker2 = {routesData.features[4].geometry.coordinates}
                    helvetebruaMarkerView = {routesData.features[5].geometry.coordinates}
                    helvetebruaMarkerWC = {routesData.features[6].geometry.coordinates}
                  />
                  
                  <Footer />
                
            </div>
        );
    }

}

export default Catalog