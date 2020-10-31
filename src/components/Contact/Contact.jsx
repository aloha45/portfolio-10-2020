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
                            <i className="fab fa-github-square fa-4x" />
                            <p>Github</p>
                        </a>
                        <a href='https://www.linkedin.com/in/cory-spicer'>
                            <i className="fab fa-linkedin fa-4x" />
                            <p>LinkedIn</p>
                        </a>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Contact;