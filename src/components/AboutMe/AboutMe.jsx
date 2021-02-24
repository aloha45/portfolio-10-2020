import React, { Component } from 'react'
import './AboutMe.css'

class AboutMe extends Component {
    state = { 
        profile: "Before coding, I worked in hospitality for fifteen years, and as a result, I end up thinking of a team as a table setting: what are people bringing to the table? Some bring forks. Others bring wine. Others bring napkins. Everyone is contributing. Everyone has a new perspective to offer. I am interested in collaborative software projects, building out APIs, understanding the shape of data, and learning new skills. I want to learn new things from teammates. I want to come in and talk about a podcast I heard the night before or an article I read that morning. Some day I will look back and be able to see how far I've come, but part of that means getting ahead as far as possible. As Maria Montessori said: 'Development is a series of rebirths.'"
     }
    render() { 
        return ( 
            <React.Fragment>
                <main>
                    <div className='container'>
                <img id="profile-pic" src='https://imgur.com/rqBlvzP.jpg' alt='cory so handsome' />
                <div id='aboutme' className="card mb-3">
                <h5 className="card-header">About Cory</h5>
                <div className="card-body">
                    <p className="card-text">{this.state.profile}</p>
                </div>
                </div>
                </div>
                </main>
            </React.Fragment>
         );
    }
}
 
export default AboutMe;