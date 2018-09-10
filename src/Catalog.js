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
        filterDistance:null,
        filterClimb:null,
        // filter false means the user does not want this type of route in the list
        filterLoop:true,
        filterTraversee:true,
        selectedRoute: null,
    }
    
    componentDidMount() {
        this.retrieveRoutesData();
    }

    // when component mount, import all routesData to listToDisplay, before being filtered
    retrieveRoutesData() {
        this.setState({listToDisplay: routesData.features})
    }

    updateVal = (e) => {
        console.log(e, "id", e.id, "value", e.value);
        // updates the value in the span just above the slider in real time
        e.id === "input-climb" || e.id === "input-distance" ? document.getElementById(`span-value-${e.id}`).textContent = e.value : null;
        // update the filter values in the state
        if (e.id === "input-distance") {
            this.setState({filterDistance : e.value})
        } else if (e.id === "input-climb") {
            this.setState({filterClimb : e.value})
        } else if (e.id === "input-loop") {
            this.state.filterLoop !== true ? this.setState({filterLoop : true}) : this.setState({filterLoop : false})
        } else if (e.id === "input-traversee") {
            this.state.filterTraversee !== true ? this.setState({filterTraversee : true}) : this.setState({filterTraversee : false})
        } else {
            console.log('updateVal function called but e.id does not correspond to anything known')
        }
        
        console.log(this.state);
    }
    
        
    // modify listToDisplay after each time the user moves a slider a check/uncheck a box
    filterListRoutes = () => {
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
                    filterLoop = {this.state.filterLoop}
                    filterTraversee = {this.state.filterTraversee}
                   updateVal = {this.updateVal}
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