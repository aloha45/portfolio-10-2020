import React, {Component} from 'react'
import './AboutMe.css'

class AboutMe extends Component {
    state = { 
        profile: "I am always piecing thing together in coding and in life. I love when a team with a plan comes together and the execution goes just as expected. Often though, problems come up, unforeseen circumstances happen, and I love figuring out the best, most elegant solution. I am interested in collaborative projects, building out APIs, and learning new skills: currently working through e-commerce and Shopify and AWS S3, Amplify, and Elastic Beanstalk. As Maria Montessori said: 'Development is a series of rebirths.'"
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