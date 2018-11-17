import React, { Component } from 'react';

const URL_EVENTS = 'http://10.56.49.187:8000/events';
const URL_NOTIFICATIONS = 'http://10.56.49.187:8000/notifications';

class EventReminder extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            events: ''
        }

        this.event = React.createRef();
        this.eventDate = React.createRef();
        this.eventTime = React.createRef();
        this.eventDescription = React.createRef();
    }

    addOptions = () => {
        if(this.state.events){
            return this.state.events.map((option,index) => {
                return <option key={index} value={option.id}>{option.name}</option>
            })
        }
    }

    pushNotifications(){
        if(this.state.events){

            let notification = {
                type: "events",
                event: this.event.current.value,
                eventDate: this.eventDate.current.valueAsNumber,
                eventTime: this.eventTime.current.value,
                eventDescription: this.eventDescription.current.value
            }

            fetch(URL_NOTIFICATIONS,{
                method: 'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(notification)
            }).then(response => response.json())
            .then(json => {
                console.log("Reponse", json);
            }).catch(error => {
                console.error("Error", error);
            })
        }
    }

    componentDidMount(){
        fetch(URL_EVENTS,{
            method:'GET'
        }).then(function(response){
            return response.json();
        }).then(json => {
            this.setState({
                events:json.events
            })
            console.log("Events", this.state.events);
        }).catch(error => {
            console.log(error)
        })
    }

    render(){
        return(
            <div className="event_reminder">
                <div className="event_setup">
                    <select ref={this.event} defaultValue="0" className="event_element event_select event_picker">
                        <option value="null">Select event...</option>
                        {this.addOptions()}
                    </select>
                    <input ref={this.eventDate} className="event_element event_date" type="date"/>
                    <select ref={this.eventTime} className="event_element event_select">
                        <option>Select time...</option>
                        <option>6:00 am</option>
                        <option>7:00 am</option>
                        <option>8:00 am</option>
                        <option>9:00 am</option>
                        <option>10:00 am</option>
                        <option>11:00 am</option>
                        <option>12:00 pm</option>
                        <option>01:00 pm</option>
                        <option>02:00 pm</option>
                        <option>03:00 pm</option>
                        <option>04:00 pm</option>
                        <option>05:00 pm</option>
                        <option>06:00 pm</option>
                        <option>07:00 pm</option>
                    </select>
                    <button className="event_element event_button" type="button" onClick={this.pushNotifications.bind(this)}>Send</button>
                </div>
                <div className="event_description">
                    <textarea ref={this.eventDescription} className="event_text"></textarea>
                </div>
            </div>
        )
    }

}

export default EventReminder;