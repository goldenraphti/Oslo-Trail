import React, { Component } from 'react'
import './App.css'
import Navbar from './Navbar'
import MapUI from './MapUI';
import Footer from './Footer'
// using webpack json loader we can import our geojson file like this
import routesData from './routes/routesData'



class Catalog extends Component {
    
    

    
    state = {
        listToDisplay : routesData.features,
        layer: 'landscape',
        filterDistance:null,
        filterClimb:null,
        // filter false means the user does not want this type of route in the list
        filterLoop:true,
        filterTraversee:true,
        markerStartFinish: true,
        markerWater: false,
        markerWC: false,
        markerViewPoint: false,
        selectedRoute: null,
        selectedMapLayer: 'landscape'
    }
    
    componentDidMount() {
        this.retrieveRoutesData();
    }

    // when component mount, import all routesData to listToDisplay, before being filtered
    retrieveRoutesData() {
        this.setState({listToDisplay: routesData.features})
    }

    updateLayer = (value) => {
        this.setState({layer: value});
    }

    updateFilters = (e) => {
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
            console.log('updateFilters function called but e.id does not correspond to anything known')
        }
        
        console.log(this.state);
    }
    
        
    // modify listToDisplay after each time the user moves a slider a check/uncheck a box
    filterListRoutes = () => {
        this.setState({listToDisplay: routesData.features})
    }
    
    // hides or display corresponding markers types when check or uncheck checkobox in tool panel Markers
     updateValMarker = (value) => {
         this.state[value] === true ? this.setState({ [value] : false }) : this.setState({ [value] : true });
     }
            
    // modify listToDisplay after user have clicked on a route in list
    selectRoute = (selectedRoute) => {
        let newListToDisplay = routesData.features.filter( element => element.properties.route === selectedRoute)
        
        this.setState({listToDisplay: newListToDisplay });
        this.setState({selectedRoute: selectedRoute});
    }

    
    clearFilters = () => {
        this.setState({listToDisplay: routesData.features});
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
                    layer = {this.state.layer}
                    updateLayer = {this.updateLayer}
                    updateFilters = {this.updateFilters}
                    updateValMarker = {this.updateValMarker}
                    markerStartFinish = {this.state.markerStartFinish}
                    markerWater = {this.state.markerWater}
                    markerWC = {this.state.markerWC}
                    markerViewPoint = {this.state.markerViewPoint}
                    selectRoute = {this.selectRoute}
                    clearFilters = {this.clearFilters}
                    selectedMapLayer = {this.state.selectedMapLayer}
                />
                  
                  <Footer />
                
            </div>
        );
    }

}

export default Catalog