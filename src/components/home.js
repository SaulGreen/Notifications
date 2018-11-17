import React, { Component } from 'react';

import Event from '../components/events';
import Overtime from '../components/overtime';
import Notification from '../components/notification';
import EventReminder from '../components/create_event';
import NotifyUser from '../components/notify_user';

class Home extends Component{

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
            case 'notify_user': return <NotifyUser/>
        }
    }

    render(){
        return(
            <div>
                <div className="cards_holder">
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
                    <div className="card">
                        <h4>Overtime</h4>
                        <hr/>
                        <div className="card_image">
                            <img src={`/images/clock.png`}/>
                        </div>
                        <div className="card_options">
                            <div className="card_option_list">
                                <div><h4>Request overtime</h4></div>
                                <hr/>
                                <div><h4>Send to team</h4></div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h4>Notifications</h4>
                        <hr/>
                        <div className="card_image">
                            <img src={`/images/notif.png`}/>
                        </div>
                        <div className="card_options">
                            <div className="card_option_list">
                                <div onClick={this.handleClick.bind(this,'notify_user')}><h4>Notify user</h4></div>
                                <hr/>
                                <div><h4>Notify team</h4></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description_holder">
                    {this._renderSubComponent()}
                </div>
            </div>
        )
    }
}

export default Home;