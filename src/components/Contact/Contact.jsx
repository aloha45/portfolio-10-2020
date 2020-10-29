import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
    state = { 
        
     }
    render() { 
        return ( 
            <React.Fragment>
                <div id='contact'>
                    <h2>Get in touch here:</h2>
                    <div className='contact-container'>
                        <a href='https://www.github.com/aloha45'>
                        <i className="fab fa-github-square"> Github</i>
                        </a>
                        <br></br>
                        <a href='https://www.linkedin.com/in/cory-spicer'>
                        <i className="fab fa-linkedin"> LinkedIn</i>
                        </a>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Contact;