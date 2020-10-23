import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return ( 
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Cory Spicer</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" href="#">Projects <span class="sr-only">(current)</span></a>
                    <a className="nav-link" href="#">About Me</a>
                    <a className="nav-link" href="#">Contact</a>
                </div>
            </div>
            </nav>
        </React.Fragment>
     );
}
 
export default NavBar;