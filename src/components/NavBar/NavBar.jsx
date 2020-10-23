import React from 'react'
import './NavBar.css'
import Clock from '../Clock/Clock'

const NavBar = () => {
    return ( 
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <p className="navbar-brand" href="#">Cory Spicer</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" href="#projects">Projects <span class="sr-only">(current)</span></a>
                    <a className="nav-link" href="#aboutme">About Me</a>
                    <a className="nav-link" href="#contact">Contact</a>
                </div>
                    <span className="clock"><Clock /></span>
            </div>
            </nav>
        </React.Fragment>
     );
}
 
export default NavBar;