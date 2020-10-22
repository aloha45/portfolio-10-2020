import React, { Component } from 'react'
import './Projects.css'

class Projects extends Component {
    state = { 
        projects: [
            {
            unit: 1,
            name: 'Plus One',
            link: 'https://plus-one.surge.sh',
            screenshot: ''
            },
            {
            unit: 2,
            name: 'Survivor Database',
            link: 'https://survivor-database.herokuapp.com/',
            screenshot: ''
            },
            {
            unit: 3,
            name: 'Beets',
            link: 'https://beets-base.herokuapp.com/',
            screenshot: ''
            },
            {
            unit: 4,
            name: 'Dapjeongneo',
            link: 'https://dapjeongneo.herokuapp.com/',
            screenshot: ''
            },{
            unit: 0,
            name: 'Is it Friday?',
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
                <h3>Check out his projects:</h3>
                {this.state.projects.map((project) => (
                    <div>
                    <h4>{project.unit}:</h4>
                    <a href={project.link}>
                        <div>{project.name}</div>
                    </a>
                    </div>
                ))}
                </div>
            </React.Fragment>
         );
    }
}
 
export default Projects;