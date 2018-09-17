import React from 'react'
//
//                           <li className="animated fadeInUp faster delay-0-1s">
//                                 <img src={require('./images/eye.png')} alt="" />
//                                 <p>The most scenic trail running routes hand-picked and tested</p></li>
//                           <li className="animated fadeInUp faster delay-0-2s">
//                                 <img src={require('./images/bus-stop.png')} alt="" />
//                                 <p>Always reachable by public transporttaion</p></li>

const DescriptionHome = () => {
    
    return (

              
                   <div id="description-home-container" className="text-page-description-container">
                       <h1 className="animated fadeIn" >Oslo Trail</h1>
                       <p className="text-intro">A handpicked collection of routes in Oslomarka. Tested and approved by <i>apasionados</i> and <i>connoisseurs</i>. A list of the 10 best trail running routes, presented with all the usefull informations such as points to refill water, toilets, spots with amazing views over the landscape, etc. All this just for you, in a progressive webapp you can bring with you in the woods and use offline ! </p>
                       <ul>
                           <li className="animated fadeInUp faster">
                                 <img src={require('./images/best-routes-2.svg')} alt="" />
                                  <div class="home-description-item-div">
                                    <h2>The true best trails around Oslo</h2>
                                    <p>A handpicked selection of the <i>crème de la crème</i> of the trail running routes around Oslo</p>
                                  </div>                                
                          </li>
                           <li className="animated fadeInUp faster">
                                 <img src={require('./images/best-views.svg')} alt="" />
                                  <div class="home-description-item-div">
                                    <h2>Scenic Viewpoints</h2>
                                    <p>Location of all the best spots with stunning views on the landscape</p>
                                  </div>                                
                          </li>
                           <li className="animated fadeInUp faster delay-0-1s">
                                 <img src={require('./images/water-tool-orange.svg')} alt="" />
                                  <div class="home-description-item-div">
                                    <h2>All facilities located</h2>
                                    <p>Everything you could need is located on your map: water, WC, ...</p>
                                  </div>                                
                          </li>
                           <li className="animated fadeInUp faster delay-0-1s">
                                 <img src={require('./images/map-layer-settings-orange.svg')} alt="" />
                                  <div class="home-description-item-div">
                                    <h2>Choose your best map</h2>
                                    <p>Select your favorite base map layer amongst the ones we've already pre-selected</p>
                                  </div>                                
                          </li>
                          <li className="animated fadeInUp faster delay-0-2s">
                                 <img src={require('./images/trails-trials.svg')} alt="" />
                                  <div class="home-description-item-div">
                                    <h2>Best routes crafted over time</h2>
                                    <p>Each route is the result of many trials, failure and discoveries, so we can say with pride what is the best</p>
                                  </div>                                
                          </li>
                           <li className="animated fadeInUp faster delay-0-2s">
                                 <img src={require('./images/bus-stop-orange.svg')} alt="" />
                                  <div class="home-description-item-div">
                                    <h2>Reachable by public transport</h2>
                                    <p>Always start and finish near a public transportation. Because we actually DO care about the planet</p>
                                  </div>                                
                          </li>
                           <li className="animated fadeInUp faster delay-0-3s">
                                 <img src={require('./images/photo-markers.svg')} alt="" />
                                  <div class="home-description-item-div">
                                    <h2>Photos documenting each spot</h2>
                                    <p>Photos of the facilities and viewpoints are each included, located, and documented. So you know what to look for</p>
                                  </div>                                
                          </li>
                           <li className="animated fadeInUp faster delay-0-3s">
                                 <img src={require('./images/filters-orange.svg')} alt="" />
                                  <div class="home-description-item-div">
                                    <h2>Tailor the routes to your needs</h2>
                                    <p>Filter distance, climbs, and more, to help you choose your next great run</p>
                                  </div>                                
                          </li>
                          
                          <li className="animated fadeInUp faster delay-0-4s">
                                 <img src={require('./images/offline-first.svg')} alt="" />
                                  <div class="home-description-item-div">
                                    <h2>Offline first</h2>
                                    <p>This is a progressive web-app, so you can bring it and use offline in the woods without worrying about signal</p>
                                  </div>                                
                          </li>
                           <li className="animated fadeInUp faster delay-0-4s">
                                 <img src={require('./images/new-routes.svg')} alt="" />
                                  <div class="home-description-item-div">
                                    <h2>Weekly release of new route</h2>
                                    <p>Each week a new route (or more) will be added to the catalog</p>
                                  </div>                                
                          </li>
                       </ul>
                   </div>

    )

}

export default DescriptionHome;