import React, { Component } from 'react'
import './Projects.css'

class Projects extends Component {
    state = { 
        projects: [
            {
            unit: 1,
            name: 'Plus One',
            description: 'Plus One is a dating app clone built with HTML, Javascript and CSS. It simulates the "swiping" system of a modern dating application and makes API calls to two different web APIs to render fake data for users, rendering the data to the page asynchronously.',
            link: 'https://plus-one.surge.sh',
            screenshot: 'https://imgur.com/R9KNtKg.jpg',
            tech: ['HTML', 'Javascript', 'CSS', 'Bootstrap 4']
            },
            {
            unit: 2,
            name: "All the Fixin's",
            description: 'A Survivor-themed fan site, with messaging, friending, flair, and commenting all in the theme of the greatest show on television. As a database for Survivor seasons did not exist openly at the time, I created my own API to record data for the 40 seasons of the show.',
            link: 'https://survivor-database.herokuapp.com/',
            screenshot: 'https://imgur.com/xgrrHCg.jpg',
            tech: ['MongoDB', 'Express', 'Node.js', 'Bootstrap', 'RESTful API']
            },
            {
            unit: 3,
            name: 'Beets',
            description: 'Beets was born with the idea of creating spontaneous, collaborative playlists using the Spotify Web API. Users can create their own profiles and playlists, and then mark the songs they are currently listening to into playlists, which are categorized by mood.',
            link: 'https://beets-base.herokuapp.com/',
            screenshot: 'https://imgur.com/kESiX5Q.jpg',
            tech: ['MongoDB', 'Express', 'React.js', 'Node.js', 'Spotify Web API', 'Bootstrap 4']
            },
            {
            unit: 4,
            name: 'Dapjeongneo',
            description: '"Dapjeongneo" is a Korean expression that means waiting for the response to a question you know the answer to. It is a dream journal that can record and persist logged dreams as posts created by a user, or, by using symbols to metaphorically express the memory of a dream, replicating the hazy notion of half-sleep. The Dream Clock was made in CSS and also doubles as an alternative to logging dream details in the middle of the night, helping you get back to dream land more quickly!',
            link: 'https://dapjeongneo.herokuapp.com/',
            screenshot: 'https://imgur.com/C1Lujte.jpg',
            tech: ['Django', 'Python', 'Javascript']
            },{
            unit: 0,
            name: 'Is it Friday?',
            description: 'This application was built in an afternoon to test different JS libraries, including confetti.js and manipulating dates in Javascript. On Fridays, the application gives a special message.',
            link: 'https://eager-shoes.surge.sh/',
            screenshot: 'https://imgur.com/HrMDPR7.jpg',
            tech: ['HTML', 'CSS', 'Javascript', 'Confetti.js']
        }
        ]
     }
    //  {/* <div className='projects'>
    //  <h2>Cory rules</h2>
    //  <h3>Check out his dope projects:</h3>
    //  <div className='container'>
    //  {this.state.projects.map((project) => (
    //      <div className="card" style={{width: '18rem'}}>
    //      <img src={project.screenshot} className="card-img-top pictures" alt="..." />
    //      <div className="card-body">
    //        <h5 className="card-title">{project.name}</h5>
    //        <p className="card-text">{project.description}</p>
    //        <a className='btn btn-primary' href={project.link}>Check it out</a>
    //      </div>
    //    </div>
    //  ))}
    //  </div>
    //  </div> */}
     
    render() { 
        return ( 
            <React.Fragment>
                <div className='projects' id='projects'>
                <h3 className='projects-header'>Check out his dope projects:</h3>
                <div className='container'> 
                {this.state.projects.map((project) => (
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={project.screenshot} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <p className="card-text">{project.description}</p>
                            <p className='tech-used'>Technologies Used:</p>
                            <ul>
                                {project.tech.map((tech) => (
                                    <li className='tech'>{tech}</li>
                                    ))}
                            </ul>
                        <div className='btn-container'>
                            <a className='btn btn-primary' href={project.link}>Check it out</a>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                ))}
                </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Projects;