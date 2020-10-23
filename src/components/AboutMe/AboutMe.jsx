import React, {Component} from 'react'
import './AboutMe.css'

class AboutMe extends Component {
    state = { 
        profile: 'just gonna see if this works'
     }
    render() { 
        return ( 
            <React.Fragment>
                <div id='aboutme'>
                <img src='' alt='here is a picture of me' />
                <h1>Cory rules</h1>
                <p>{this.state.profile}</p>
                </div>
            </React.Fragment>
         );
    }
}
 
export default AboutMe;