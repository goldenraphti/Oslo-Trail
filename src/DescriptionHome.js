import React from 'react'

const DescriptionHome = () => {
    
    return (

              
                   <div id="description-home-container" className="text-page-description-container">
                       <h1 class="animated fadeIn" >Oslo Trail</h1>
                       <ul>
                           <li class="animated fadeInUp faster">
                                 <img src={require('./images/mountains.png')} />
                                  <p>10 best trails around Oslo</p>
                          </li>
                           <li class="animated fadeInUp faster delay-0-1s">
                                 <img src={require('./images/eye.png')} />
                                 <p>The most scenic trail running routes hand-picked and tested</p></li>
                           <li class="animated fadeInUp faster delay-0-2s">
                                 <img src={require('./images/bus-stop.png')} />
                                 <p>Always reachable by public transporttaion</p></li>
                       </ul>
                   </div>

    )

}

export default DescriptionHome;