import React, { Component } from 'react';

export default class ToolPanel extends Component {
  state = {
      colExpanded : false ,
      panelExpanded : false ,
  }

    
    componentDidMount() {
//        console.log('inside mapUI - ComponentDidMount' , this.state)
    }

    componentWillReceiveProps() {
//        console.log('inside mapUI - componentWillReceiveProps' , this.state, this.props)
    }

    componentDidUpdate() {
//        console.log('inside mapUI - ComponentDidUpdate', this.state, this.props)
    }


    
    expandToolPanel = (e) => {
        e.preventDefault();
        const toolPanel = document.getElementById('catalog-panel');
        if (toolPanel.hasAttribute('class', 'hidden')) {
            toolPanel.removeAttribute('class','hidden') ;
            document.getElementById('open-tool-button').classList.add('hidden')
            document.getElementById('close-tool-button').classList.remove('hidden')
        }else {
            toolPanel.setAttribute('class','hidden')
            document.getElementById('open-tool-button').classList.remove('hidden')
            document.getElementById('close-tool-button').classList.add('hidden')
        };
    }
    
    expandToolSection = (e) => {
        e.preventDefault();
        // hides the previously displayed form-section
        const formSectionAll = document.getElementsByClassName('form-section-hideable');
        for (const section of formSectionAll) {
            section.classList.contains('hidden') ? null : section.classList.add('hidden');
        }
        // takes the id of the button clicked
        const buttonID = e.target.id;
        // cleans the button ID to keep ony the first word so can add container to it and then use it directly inb literal expression
//        let containerID = buttonID.slice(0, -11).
        const suffix = '-container';
        let containerID = buttonID.split('-')[0].concat(suffix);
        document.getElementById(containerID).classList.remove('hidden');
        
    }

  render() {
    
    return (
            
           <form id="catalog-panel" className="hidden">
                <div id="tool-icons-column">
                    <button id="close-tool-button" className="tool-button" onClick={ e => this.expandToolPanel(e)} ></button>
                    <button id="search-tool-button" className="tool-button" onClick={ e => this.expandToolSection(e)}  ></button>
                    <button id="layers-tool-button" className="tool-button"  onClick={ e => this.expandToolSection(e)}  ></button>
                    <button id="filters-tool-button" className="tool-button" onClick={ e => this.expandToolSection(e)} ></button>
                    <button id="markers-tool-button" className="tool-button" onClick={ e => this.expandToolSection(e)}  ></button>
                </div>
                   <div id="content-tool-panel">
                      <div id="search-container" className="form-section form-section-hideable hidden">
                            <h2>Search</h2>
                            <div className="search-books-bar">
                                <div className="search-books-input-wrapper">
                                   <input
                                      id="searchLocationInput"
                                       type='text'
                                       placeholder='Search by start/finish location or spot to cross'
                                       onChange={ (e) => this.props.searchLocationsInRoutes(e.target.value) }    
                                   />
                                    <div className="checkbox-div">
                                       <label>Search in all routes</label>
                                        <input type="checkbox" id="searchInAllRoutes-checkbox" value="landscape" name="layer-checkbox" onChange={e => this.props.updateSearchInAll(this.props.searchInAllRoutesNotOnlyFiltered)} checked = {this.props.searchInAllRoutesNotOnlyFiltered} />
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div id="layers-container" className="form-section form-section-hideable hidden">
                            <h2>Map layer</h2>
                            <div id="layers-radiobox-container">
                                <div className="radiobox-row">
                                    <div className="checkbox-div">
                                       <label>Landscape</label>
                                        <input type="radio" id="landscape-checkbox" value="landscape" name="layer-checkbox" onChange={e => this.props.updateLayer(e.target.value)} checked = {this.props.layer === 'landscape'} />
                                    </div>
                                </div>
                                <div className="radiobox-row">
                                    <div className="checkbox-div">
                                       <label>Outdoors</label>
                                        <input type="radio" id="outdoors-checkbox" value="outdoors" name="layer-checkbox" onChange={e => this.props.updateLayer(e.target.value)} />
                                    </div>
                                </div>
                                <div className="radiobox-row">
                                    <div className="checkbox-div">
                                       <label>Transport</label>
                                        <input type="radio" id="transport-checkbox" value="transport" name="layer-checkbox" onChange={e => this.props.updateLayer(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div id="filters-container" className="form-section form-section-hideable hidden">
                            <h2>Filters</h2>
                          
                           <div className="filter-div range-slider">
                              <h3>Distance (km)</h3>
                               <div className="range-slider-column">
                                  <span className="range-input-value" id="span-value-input-distance">-</span>
                                   <input onChange={e => this.props.updateFilters(e.target.id , e.target.value , this.props.filterDistance)} className="range-slider__range"  id="input-distance" type="range" min="0" max="150" step="5"></input>
                               </div>
                            </div>
                                     
                            <div className="filter-div range-slider">
                              <h3>Climb (m+)</h3>
                               <div className="range-slider-column">
                                   <span className="range-input-value" id="span-value-input-climb">-</span>
                                    <input onChange={e => this.props.updateFilters(e.target.id , e.target.value , this.props.filterClimb)} className="range-slider__range"  id="input-climb" type="range" min="0" max="3000" step="10"></input>
                                </div>
                            </div>
                                     
                            <div className="filter-div checkbox-container">
                              <h3>Type of route</h3>
                                <div className="checkbox-column">
                                    <div className="checkbox-div">
                                        <input onChange={e => this.props.updateFilters(e.target.id , e.target.value , this.props.loop)} className="" id="input-loop"  type="checkbox" checked={this.props.loop} value="loop" title="loop"></input>
                                       <label>Loop</label>
                                    </div>
                                      <div className="checkbox-div">
                                        <input onChange={e => this.props.updateFilters(e.target.id , e.target.value , this.props.traversee)} className="" id="input-traversee"  type="checkbox" checked={this.props.traversee} value="traversee" title="traversee"></input>
                                       <label>One-way Crossing</label>
                                    </div>
                                </div>
                            </div> 
                       </div>
                       <div id="markers-container" className="form-section form-section-hideable hidden">
                            <h2>Markers</h2>
                            
                            <div className="markers-checkbox-container">
                                <div className="checkbox-row">
                                   <div className="marker-checkbox-description">
                                       <img src={require('./images/start-finish-tool-colored.svg')} alt=""/>
                                       <p id="start-finish-description">Start/Finish</p>
                                   </div>
                                    <input aria-labelledby="start-finish-description" onChange={e => this.props.updateValMarker(e.target.value)} className="" value="markerStartFinish" id="input-marker-start-finish"  type="checkbox" checked={this.props.markerStartFinish}></input>
                                </div>
                                <div className="checkbox-row">
                                   <div className="marker-checkbox-description">
                                       <img src={require('./images/water-tool-colored.svg')} alt=""/>
                                       <p id="water-description">Drinkable water</p>
                                   </div>
                                    <input aria-labelledby="water-description" onChange={e => this.props.updateValMarker(e.target.value)} className="" value="markerWater" id="input-marker-water"  type="checkbox" checked={this.props.markerWater}></input>
                                </div>
                                <div className="checkbox-row">
                                   <div className="marker-checkbox-description">
                                       <img src={require('./images/wc-tool-colored.svg')} alt=""/>
                                       <p id="wc-description">WC</p>
                                   </div>
                                    <input aria-labelledby="wc-description" onChange={e => this.props.updateValMarker(e.target.value)} className="" value="markerWC" id="input-marker-wc"  type="checkbox" checked={this.props.markerWC}></input>
                                </div>
                                <div className="checkbox-row">
                                   <div className="marker-checkbox-description">
                                       <img src={require('./images/view-point-tool-colored.svg')} alt=""/>
                                       <p id="view-points-description">View Points</p>
                                   </div>
                                    <input aria-labelledby="view-points-description" onChange={e => this.props.updateValMarker(e.target.value)} className="" value="markerViewPoint" id="input-marker-view-point"  type="checkbox" checked={this.props.markerViewPoint}></input>
                                </div>
                            </div> 
                       </div>
                        <div id="list-routes" className="form-section">
                            <h2>Routes list</h2>
                            <ul>
                                {this.props.routesToDisplay.filter(route => route.properties.featureType === 'route' ).map( (route) => (
                                    <li key={route.properties.name} onClick={e => this.props.selectRoute(route.properties.route)}><button type="button" href="#">{route.properties.route}</button></li>
                                ))}
                            </ul>
                            <div id="clear-filters" className="link" role="button" onClick={e => this.props.clearFilters()} ><button type="button">Show all routes</button></div>
                        </div>
                   </div>
              </form>
    )
  }
}

