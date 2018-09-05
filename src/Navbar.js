import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    
    return (

              <nav id="navbar">
                   <ul>
                      <li>
                        <div className="nav-link">
                            <Link to="/">Home</Link>
                        </div>
                       </li>
                       <li>
                        <div className="nav-link">
                            <Link to="/catalog">Catalog</Link>
                        </div>
                       </li>
                       <li>
                           <a href="">My Routes</a>
                       </li>
                       <li>
                           <a href="">About</a>
                       </li>
                       <li>
                           <a href="">Contact</a>
                       </li>
                   </ul>
               </nav>

    )

}

export default Navbar;