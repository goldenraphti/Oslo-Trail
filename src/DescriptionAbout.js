import React from 'react'

const DescriptionAbout = () => {
    
    return (

              
                   <div id="description-about-container" className="text-page-description-container">
                       <h1 className="animated fadeIn" >About</h1>
                       <p className="animated fadeInUp">This project was made by <a href="mailto:rferrand@rferrand.com">Raphaël Ferrand</a>, in Oslo Norway.</p>
                       
                       <div id="credits">
                           <div id="credits-div">
                               <h2>Credits</h2>
                               <img src={require('./images/credits.svg')} alt="" />
                           </div>
                           <p>Special thanks to all the humans behind the great ressources we have used along the way:</p>
                           <ul>
                               <li><a href="https://reactjs.org/">React</a></li>
                               <li><a href="https://reacttraining.com/react-router/">React Router</a></li>
                               <li><a href="https://thenounproject.com/">The nounproject icons</a></li>
                                <li>(<a href="https://thenounproject.com/bernar.novalyi/">Bernar Novalyi</a>,</li>
                                <li> <a href="https://thenounproject.com/prosymbols/">ProSymbols</a>,</li>
                                <li> <a href="https://thenounproject.com/yumminky/">Juraj Sedlák</a>,</li>
                                <li> <a href="https://thenounproject.com/smashicons/">Ben Davis</a> )</li>
                               <li><a href="https://leafletjs.com/">Leaflet</a></li>
                               <li><a href="https://react-leaflet.js.org/en/">React-leaflet</a></li>
                               <li><a href="https://www.thunderforest.com/">Thunderforest</a></li>
                               <li><a href="https://daneden.github.io/animate.css/">Animate.css</a></li>
                               <li><a href="http://geojson.io">Geojson</a></li>
                           </ul>
                       </div>
                   </div>

    )

}

export default DescriptionAbout;