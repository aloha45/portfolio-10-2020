import React, { Component } from 'react'

class Projects extends Component {
    state = { 
        projects: [
            {
            unit: 1,
            name: 'Plus One',
            link: '#',
            screenshot: ''
            },
            {
            unit: 2,
            name: 'Survivor Database',
            link: '#',
            screenshot: ''
            },
            {
            unit: 3,
            name: 'Beets',
            link: '#',
            screenshot: ''
            },
            {
            unit: 4,
            name: 'Dapjeongneo',
            link: '#',
            screenshot: ''
            }
        ]
     }

    render() { 
        return ( 
            <React.Fragment>
                <h2>Cory rules</h2>
                <h3>Check out his projects:</h3>
                {this.state.projects.map((project) => (
                    <div>{project.name}</div>
                ))}
            </React.Fragment>
         );
    }
}
 
export default Projects;