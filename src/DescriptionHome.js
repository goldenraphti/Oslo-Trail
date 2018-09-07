import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const DescriptionHome = () => {
    
    return (

              
                   <ul>
                       <li>
                             <img src={require('./images/mountains.png')} />
                              <p>10 best trails around Oslo</p>
                      </li>
                       <li>
                             <img src={require('./images/eye.png')} />
                             <p>The most scenic trail running routes hand-picked and tested</p></li>
                       <li>
                             <img src={require('./images/bus-stop.png')} />
                             <p>Always reachable by public transporttaion</p></li>
                   </ul>

    )

}

export default DescriptionHome;