import React from 'react'

const NavBar = () => {
    return ( 
        <React.Fragment>
            <header>
            <nav>
                <div className='nav-wrapper'>
                    <ul id="nav-mobile" className="right">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                        <a className="nav-link active" href="/about">About</a>
                        </li>
                    </ul>
                    </ul>
                </div>
            </nav>
            </header>
        </React.Fragment>
     );
}
 
export default NavBar;