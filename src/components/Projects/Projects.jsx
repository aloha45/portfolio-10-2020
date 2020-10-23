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
            name: "All the Fixin's",
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
            screenshot: 'https://imgur.com/HrMDPR7.jpg'
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
                <h2>Cory rules</h2>
                <h3>Check out his dope projects:</h3>
                <div className='container'> 
                {this.state.projects.map((project) => (
                <div className="card mb-3" style={{width: '540px'}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={project.screenshot} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <p className="card-text">{project.description}</p>
                            <a className='btn btn-primary' href={project.link}>Check it out</a>
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