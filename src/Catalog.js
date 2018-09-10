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
        selectedRoute: null,
    }


    
    
    componentDidMount() {
        this.retrieveRoutesData();
    }

    // when component mount, import all routesData to listToDisplay, before being filtered
    retrieveRoutesData() {
        this.setState({listToDisplay: routesData.features})
    }
            
    // modify listToDisplay after user have clicked on a route in list
    selectRoute = (selectedRoute) => {
        console.log('inside selectRoute()' , selectedRoute , routesData.features);
        let newListToDisplay = routesData.features.filter( element => element.properties.route === selectedRoute)
        
        this.setState({listToDisplay: newListToDisplay });
        this.setState({selectedRoute: selectedRoute});
//        console.log(this.state);
        this.updateListToDisplay();
    }
    
    updateListToDisplay = () => {
        console.log('inside updateListToDisplay() - routesData.features' ,routesData.features);
        console.log('inside updateListToDisplay() - this.state' ,this.state);
        if (this.state.selectedRoute !== null) {
            console.log(routesData.features)
//            this.setState({listToDisplay: routesData.features})
        }
    }
    
    // modify listToDisplay after user have clicked to filter list
    filterListRoutes = () => {
        this.setState({listToDisplay: routesData.features})
    }
    
    clearFilters = () => {
        this.setState({listToDisplay: routesData.features});
    }


    //list of map layers ( TO BE REFACTORED AND ADDED DYNAMICALLY)
    layers = {
        landscape: {
            nameTile: 'landscape',
            url: 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=dcc7bcce19df4c7e9537813bd66c45b5',
            attribution : "Maps <a href=&quot;http://www.thunderforest.com/&quot;>Thunderforest</a>, Data <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors",
            initiallyChecked :true
        },
        outdoors: {
            nameTile: 'outdoors',
            url: 'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=dcc7bcce19df4c7e9537813bd66c45b5',
            attribution : "Maps <a href=&quot;http://www.thunderforest.com/&quot;>Thunderforest</a>, Data <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        },
        transport: {
            nameTile: 'transport',
            url: 'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=dcc7bcce19df4c7e9537813bd66c45b5',
            attribution : "Maps <a href=&quot;http://www.thunderforest.com/&quot;>Thunderforest</a>, Data <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        },
    }
    
    render() {
        return (
            <div id='catalog-container'>
                
                <Navbar />
               
                <MapUI
                   listToDisplay = {this.state.listToDisplay}
                   markersListToDisplay = {this.state.markersListToDisplay}
                   selectRoute = {this.selectRoute}
                   clearFilters = {this.clearFilters}
                   layers = {this.layers}
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