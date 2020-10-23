import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
    state = { 
        
     }
    render() { 
        return ( 
            <React.Fragment>
                <div id='contact'>
                    <h1>Cory rules</h1>
                    <h2>Get in touch here:</h2>
                    <a href='https://www.github.com/aloha45'>
                    <i class="fab fa-github-square"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/cory-spicer'>
                    <i class="fab fa-linkedin"></i>
                    </a>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Contact;