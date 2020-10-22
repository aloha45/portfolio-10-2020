import React, { Component } from 'react'
import './Projects.css'

class Projects extends Component {
    state = { 
        projects: [
            {
            unit: 1,
            name: 'Plus One',
            description: 'a dating app',
            link: 'https://plus-one.surge.sh',
            screenshot: 'https://imgur.com/R9KNtKg.jpg'
            },
            {
            unit: 2,
            name: 'Survivor Database',
            description: 'building my own api',
            link: 'https://survivor-database.herokuapp.com/',
            screenshot: 'https://imgur.com/xgrrHCg.jpg'
            },
            {
            unit: 3,
            name: 'Beets',
            description: 'creating spontaneous, collaborative playlists',
            link: 'https://beets-base.herokuapp.com/',
            screenshot: 'https://imgur.com/kESiX5Q.jpg'
            },
            {
            unit: 4,
            name: 'Dapjeongneo',
            description: 'a dream journal using symbols',
            link: 'https://dapjeongneo.herokuapp.com/',
            screenshot: 'https://imgur.com/C1Lujte.jpg'
            },{
            unit: 0,
            name: 'Is it Friday?',
            description: 'dom manipulation tester',
            link: 'https://eager-shoes.surge.sh/',
            screenshot: ''
        }
        ]
     }

    render() { 
        return ( 
            <React.Fragment>
                <div className='projects'>
                <h2>Cory rules</h2>
                <h3>Check out his dope projects:</h3>
                {this.state.projects.map((project) => (
                    <div class="card mb-3">
                    <img src={project.screenshot} className="card-img-top pictures" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">{project.name}</h5>
                      <p class="card-text">{project.description}</p>
                      <p class="card-text"><small class="text-muted">Last updated {project.unit} mins ago</small></p>
                      <a className='btn btn-primary' href={project.link}>Check it out</a>
                    </div>
                  </div>




                    // <div className='container'>
                    // <h4>{project.unit}:</h4>
                    // <img className='pictures' alt='project-screenshot' src={project.screenshot} />
                    // <a href={project.link}>
                    //     <div>{project.name}</div>
                    // </a>
                    // </div>
                ))}
                </div>
            </React.Fragment>
         );
    }
}
 
export default Projects;