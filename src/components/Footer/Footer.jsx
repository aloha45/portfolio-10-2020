import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <footer>
                    <p id='footer'>
                        Copyright &copy; Cory Spicer
                    </p>
                </footer>
            </React.Fragment>
         );
    }
}
 
export default Footer;