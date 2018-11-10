import React, { Component } from 'react';

import EventReminder from './create_event';

class Event extends Component {

    constructor(props){
        super(props);

        this.state = {
            render: ''
        }
    }

    handleClick = (compName, e) => {
        console.log(compName);
        this.setState({
            render:compName
        });
    }

    _renderSubComponent = () => {
        switch(this.state.render){
            case 'events' : return <EventReminder/>
        }
    }

    render(){
        return(
            <div className="card">
                <h4>Events</h4>
                <hr/>
                <div className="card_image">
                    <img src={`/images/calendar.png`}/>
                </div>
                <div className="card_options">
                    <div className="card_option_list">
                        <div onClick={this.handleClick.bind(this,'events')}><h4>Send to all</h4></div>
                        <hr/>
                        <div><h4>Send to team</h4></div>
                    </div>
                </div>
            </div>
        )   
    }
}

export default Event;