import React, { Component } from 'react'
import './App.css'
import Navbar from './Navbar'
import MapUI from './MapUI';
import Footer from './Footer'
// using webpack json loader we can import our geojson file like this
import routesData from './routes/routesData'


    
    const allRoutes = routesData.features.filter(element => element.properties.featureType === 'route' )

    const allMarkers = routesData.features.filter(element => element.properties.featureType === 'marker' )


class Catalog extends Component {
    
    
    state = {
        routesToDisplay : allRoutes,
        markersToDisplay : allMarkers, 
        routeNamesToDisplay : [],
        layer: 'landscape',
        filterDistance:null,
        filterClimb:null,
        // filter false means the user does not want this type of route in the list
        loop:true,
        traversee:true,
        markerStartFinish: true,
        markerWater: false,
        markerWC: false,
        markerViewPoint: false,
        selectedRoute: null,
        selectedMapLayer: 'landscape',
    }
    
    componentDidMount() {
        this.retrieveRoutesData();
    }

    componentDidUpdate() {
    }

    // when component mount, import all routesData to listToDisplay, before being filtered
    retrieveRoutesData() {
        this.setState({routesToDisplay : allRoutes });
        this.setState({markersToDisplay : allMarkers });
        this.updateRouteNamesToDisplay();
    }

    updateLayer = (value) => {
        this.setState({layer: value});
    }

    updateFilters = (e) => {
        
        // updates the value in the span just above the slider in real time
        e.id === "input-climb" || e.id === "input-distance" ? document.getElementById(`span-value-${e.id}`).textContent = e.value : null;
        
        console.log(e.id , e.value);
        
        // update the filter values in the state
        if (e.id === "input-distance") {
            this.setState({filterDistance : e.value});
        } else if (e.id === "input-climb") {
            this.setState({filterClimb : e.value});
        } else if (e.id === "input-loop") {
            this.state.loop === true ? this.setState({loop : false}) : this.setState({loop : true})
        } else if (e.id === "input-traversee") {
            this.state.traversee === true ? this.setState({traversee : false}) : this.setState({traversee : true})
        } else {
            console.log('updateFilters function called but e.id does not correspond to anything known')
        }
        
        this.filterRoutes()
        
    }
    
    filterRoutes = () => {        
        let newRoutesToDisplay = allRoutes.filter(route => route.properties.climb <= this.state.filterClimb || this.state.filterClimb === null ).filter(route => route.properties.distance <= this.state.filterDistance || this.state.filterDistance === null ).filter(route => this.state[route.properties['route-type']]);
        
        this.setState({routesToDisplay: newRoutesToDisplay });
        
        this.updateRouteNamesToDisplay();
    }
    
    // hides or display corresponding markers types when check or uncheck checkobox in tool panel Markers
     updateValMarker = (value) => {
         this.state[value] === true ? this.setState({ [value] : false }) : this.setState({ [value] : true });
     }
            
    // modify listToDisplay after user have clicked on a route in list
    selectRoute = (selectedRoute) => {
        let newListToDisplay = allRoutes.filter( element => element.properties.route === selectedRoute)
        
        this.setState({routesToDisplay: newListToDisplay });
        this.setState({selectedRoute: selectedRoute});
        
        this.updateRouteNamesToDisplay();
    }

    updateRouteNamesToDisplay = () => {
//        this.state.markersToDisplay.map( marker => console.log(marker.properties.route));
        let routeNamesToDisplay = [];
        this.state.routesToDisplay.map( route => routeNamesToDisplay.push(route.properties.route) );
        
        this.setState({routeNamesToDisplay : routeNamesToDisplay})
        
//        console.log(routesNamesToDisplay , this.state.routesToDisplay.length);
//        this.state.markersToDisplay.map( marker => console.log(marker , marker.properties.route ,  routesNamesToDisplay.includes(marker.properties.route)))
    }
    
    clearFilters = () => {
        this.setState({routesToDisplay: allRoutes});
    }
    
    render() {
        return (
            <div id='catalog-container'>
                
                <Navbar />
               
                <MapUI
                    routesToDisplay = {this.state.routesToDisplay}
                    markersToDisplay = {this.state.markersToDisplay}
                    routeNamesToDisplay = {this.state.routeNamesToDisplay}
                    filterClimb = {this.state.filterClimb}
                    filterDistance = {this.state.filterDistance}
                    loop = {this.state.loop}
                    traversee = {this.state.traversee}
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