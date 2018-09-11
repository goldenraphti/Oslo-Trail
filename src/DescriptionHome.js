import React from 'react'

const DescriptionHome = () => {
    
    return (

              
                   <div id="description-home-container" className="text-page-description-container">
                       <h1 className="animated fadeIn" >Oslo Trail</h1>
                       <p className="text-intro">A handpicked collection of routes in Oslomarka. Tested and approved by <i>apasionados</i> and <i>connoisseurs</i>. A list of the 10 best trail running routes, presented with all the usefull informations such as points to refill water, toilets, spots with amazing views over the landscape, etc. All this just for you, in a progressive webapp you can bring with you in the woods and use offline ! </p>
                       <ul>
                           <li className="animated fadeInUp faster">
                                 <img src={require('./images/mountains.png')} alt="" />
                                  <p>10 best trails around Oslo</p>
                          </li>
                           <li className="animated fadeInUp faster delay-0-1s">
                                 <img src={require('./images/eye.png')} alt="" />
                                 <p>The most scenic trail running routes hand-picked and tested</p></li>
                           <li className="animated fadeInUp faster delay-0-2s">
                                 <img src={require('./images/bus-stop.png')} alt="" />
                                 <p>Always reachable by public transporttaion</p></li>
                       </ul>
                   </div>

    )

}

export default DescriptionHome;