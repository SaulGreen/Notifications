import React, { Component } from 'react';

class EventReminder extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="event_reminder">
                <div className="event_setup">
                    <select className="event_element">
                        <option>Select event...</option>
                    </select>
                    <input className="event_element event_date" type="date"/>
                    <select className="event_element">
                        <option>Select event...</option>
                    </select>
                    <input className="event_element event_button" type="button" value="Send"/>
                </div>
                <div className="event_description">

                </div>
            </div>
        )
    }

}

export default EventReminder;