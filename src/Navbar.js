import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    
    componentDidMount() {
        this.underlineCurrentPage()
    }
    
    // function to identify all the navbar links, then iterate through them to check which one is the one of the current page (innerText === this.props.currentPage) and the adds to it a className to keep it always underlines, or different color, or whatever
    underlineCurrentPage = () => {
        console.log(this.props.currentPage)
        
        let listLinks = document.getElementsByClassName('nav-a-link');

        
        for( let link of listLinks) {
                    
            let textLink = link.textContent.toLowerCase();
            textLink == this.props.currentPage ? link.classList.add('currentNav') : null;
        }
        
    }
    
    render() {
        return (

                  <nav id="navbar">
                       <ul>
                          <li>
                            <div className="nav-link">
                                <Link className="nav-a-link" to="/" >Home</Link>
                            </div>
                           </li>
                           <li>
                            <div className="nav-link">
                                <Link className="nav-a-link" to="/catalog">Catalog</Link>
                            </div>
                           </li>
                           <li>
                               <div className="nav-link">
                                <Link className="nav-a-link" to="/about">About</Link>
                            </div>
                           </li>
                       </ul>
                   </nav>

        )
    }

}

export default Navbar;