import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
    state = { 
        
     }
    render() { 
        return ( 
            <React.Fragment>
                <main>
                <div id='contact'>
                    <h2 id='contact-header'>Get in touch here:</h2>
                    <div class="card contact mb-3" style={{'max-width': '540px'}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src="https://imgur.com/PU30CEz.jpg" className="card-imgs" alt="..." />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Cory Spicer</h5>
                                <ul className="list-group list-group-flush">
                            <li className="list-group-item">Queens, NY</li>
                            <li className="list-group-item">corys4139@gmail.com</li>
                            <li className="list-group-item">614-832-2739</li>
                    <div className='contact-container'>
                        <a href='https://www.github.com/aloha45'>
                            <i className="fab fa-github-square fa-4x" />
                            <p>Github</p>
                        </a>
                        <a href='https://www.linkedin.com/in/cory-spicer'>
                            <i className="fab fa-linkedin fa-4x" />
                            <p>LinkedIn</p>
                        </a>
                        <a href='Cory Spicer Nov 2020.pdf'>
                            <i className="fas fa-file fa-4x"></i>
                            <p>Resume</p>
                        </a>
                        </div>
                        </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </main>
            </React.Fragment>
         );
    }
}
 
export default Contact;