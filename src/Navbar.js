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
                           <div className="nav-link">
                            <Link to="/about">About</Link>
                        </div>
                       </li>
                   </ul>
               </nav>

    )

}

export default Navbar;