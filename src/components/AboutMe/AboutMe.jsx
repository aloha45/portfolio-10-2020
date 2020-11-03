import React, {Component} from 'react'
import './AboutMe.css'

class AboutMe extends Component {
    state = { 
        profile: "I am always in search of synchronicity, whether on a project sprint or in the kitchen. I love times when a team comes together, a plan comes together, and the execution goes just how you expected--when you make ten dishes at once and they all come out, hot, at just the right time. I'm interested in creative, collaborative projects, building out APIs and calling everything you need to just the right place. I'll throw the Spotify Web API on anything."
     }
    render() { 
        return ( 
            <React.Fragment>
                <img id="profile-pic" src='https://imgur.com/rqBlvzP.jpg' alt='cory so handsome' />
                <div id='aboutme' className="card mb-3">
                <h5 className="card-header">About Me</h5>
                <div className="card-body">
                    <p className="card-text">{this.state.profile}</p>
                </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default AboutMe;