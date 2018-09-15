import React, { Component } from 'react'
import './App.css'
import Navbar from './Navbar'
import MapUI from './MapUI';
import Footer from './Footer'
import escapeRegExp from 'escape-string-regexp'
// using webpack json loader we can import our geojson file like this
import routesData from './routes/routesData'


    
    const allRoutes = routesData.features.filter(element => element.properties.featureType === 'route' )

    const allMarkers = routesData.features.filter(element => element.properties.featureType === 'marker' )


class Catalog extends Component {
    
    
    state = {
        currentPage: 'catalog',
        routesToDisplay : allRoutes,
        markersToDisplay : allMarkers, 
        routeNamesToDisplay : [],
        searchOnlyDisplayed: false,
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
//        console.log('inside catalog - ComponentDidMount' , allRoutes.map( route => route.properties.locationsToSearch))
    }

    componentWillReceiveProps() {
//        console.log('inside catalog - componentWillReceiveProps' , this.state)
    }

    componentDidUpdate() {
//        console.log('inside catalog - ComponentDidUpdate', this.state)
        
    }

    // when component mount, import all routesData to listToDisplay, before being filtered
    retrieveRoutesData() {
        this.setState({routesToDisplay : allRoutes });
        this.setState({markersToDisplay : allMarkers });
        this.updateRouteNamesToDisplay();
    }

    // function called each time the user type in the search location panel, putting some latency as in the book tracking app, filtering the list of routes displayed conserving only the ones containing this part of word in one of their locations saved in their properties.locationsToSearch
    searchLocationsInRoutes = (query) => {
        
        let isLookingInAllRoutesOrOnlyDisplayed = this.state.searchOnlyDisplayed;
        
        const match = new RegExp(escapeRegExp(query), 'i')
        
        console.log(match)

        let routesToMatchWith = [];
        
        // must make sure that when searchh only in displayed, recreate the list again filtering using the filters, buut startibng from the whole allRoutes and filtering on  top of that and THEN only matching the RegExp
        this.state.searchOnlyDisplayed ? routesToMatchWith = allRoutes.filter( route => route.properties.climb <= this.state.filterClimb || this.state.filterClimb === null).filter( route =>  route.properties.distance <= this.state.filterDistance || this.state.filterDistance === null).filter( route =>  this.state[route.properties['route-type']] ) : routesToMatchWith = allRoutes;
        
        let allRoutesFilteredBySearchTerm = routesToMatchWith.filter(route => match.test(route.properties.locationsToSearch) )

        console.log( 'routesToMatchWith' , routesToMatchWith , 'allRoutesFiltered', allRoutesFilteredBySearchTerm);
        
        this.setState({routesToDisplay : allRoutesFilteredBySearchTerm });
        
//      must make sure when routes hides then their markers hide too
        this.updateRouteNamesToDisplay(allRoutesFilteredBySearchTerm);
        
        
    }

    updateLayer = (value) => {
        this.setState({layer: value});
    }

    updateFilters = (id , value , prevState) => {

                
//        console.log( 'in updateFilters' , id , value , prevState, this.state);
        
        // updates the value in the span just above the slider in real time
        id === "input-climb" || id === "input-distance" ? document.getElementById(`span-value-${id}`).textContent = value : null;
        

        
        // update the filter values in the state
        if (id === "input-distance") {
            this.setState({filterDistance : value});
        } else if (id === "input-climb") {
            this.setState({filterClimb : value});
        } else if (id === "input-loop") {
            this.setState({loop : !this.state.loop})
        } else if (id === "input-traversee") {
            this.setState({traversee : !this.state.traversee})
        } else {
            console.log('updateFilters function called but id does not correspond to anything known')
        }
        
        this.filterRoutes(id, value, prevState);
        
    }

    // filter routes based on the filters saved and the values sent from the filter onChanged
    filterRoutes = (id = null, value = null, prevState = null) => {
        
        
        let newRoutesToDisplay = allRoutes.filter( route => ( id === 'input-climb' ?  (route.properties.climb <= value) :  (route.properties.climb <= this.state.filterClimb || this.state.filterClimb === null)) ).filter( route => ( id === 'input-distance' ?  (route.properties.distance <= value) :  (route.properties.distance <= this.state.filterDistance || this.state.filterDistance === null)) )
        
        newRoutesToDisplay = newRoutesToDisplay.filter( route => (route.properties['route-type'] === value ? !prevState : this.state[route.properties['route-type']] ) );
        
        this.setState({routesToDisplay: newRoutesToDisplay });
        
        this.updateRouteNamesToDisplay(newRoutesToDisplay);
        
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
        
        this.updateRouteNamesToDisplay(newListToDisplay);
    }

    updateRouteNamesToDisplay = (newRoutesToDisplay) => {
        let routeNamesToDisplay = [];
        
        newRoutesToDisplay !== undefined ? newRoutesToDisplay.map( route => routeNamesToDisplay.push(route.properties.route) ) : allRoutes.map (route => routeNamesToDisplay.push(route.properties.route));
        
        this.setState({routeNamesToDisplay : routeNamesToDisplay})
    }
    
    clearFilters = () => {
        this.setState({routesToDisplay: allRoutes});
        this.updateRouteNamesToDisplay(allRoutes);
    }
    
    render() {
        return (
            <div id='catalog-container'>
                
                <Navbar 
                    currentPage = 'catalog'
                 />
               
                <MapUI
                    routesToDisplay = {this.state.routesToDisplay}
                    markersToDisplay = {this.state.markersToDisplay}
                    routeNamesToDisplay = {this.state.routeNamesToDisplay}
                    searchLocationsInRoutes = {this.searchLocationsInRoutes}
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