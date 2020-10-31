import React, { Component } from 'react';
import './Clock.css'

class Clock extends Component {
    state = { 
        clock: {
            hour: '',
            minute: '',
            second: ''
        }
     }
    
    updateTime(time) {
         if (time < 10) {
             return "0" + time;
            } else {
                return time;
            }
        }
        
    currentTime() {
        let date = new Date();
        let hour = date.getHours();        
        let min = date.getMinutes();
        let sec = date.getSeconds();
        hour = this.updateTime(hour);
        if (hour > 12) {
            hour = parseInt((hour - 12))
        } 
        if (hour == 0) {
            hour = 12
        }
        min = this.updateTime(min);
        sec = this.updateTime(sec);
        this.setState({ clock: {
            hour: hour,
            minute: min,
            second: sec
            }
        })
    }
    
    componentDidMount() {
        this.currentTime()
        setInterval(()=>{ this.currentTime() }, 1000); 
    }

    render() { 
        return ( 
            <React.Fragment>
                {this.state.clock.hour ?
                <div id='clock'>{this.state.clock.hour}:{this.state.clock.minute}:{this.state.clock.second}</div> :
                <div></div>
                }
            </React.Fragment>
         );
    }
}

export default Clock;