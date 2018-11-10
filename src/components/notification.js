import React from 'react';

const Notification = (props) => {

    return(
        <div className="card">
            <h4>Notifications</h4>
            <hr/>
            <div className="card_image">
                <img src={`/images/notif.png`}/>
            </div>
            <div className="card_options">
                <div className="card_option_list">
                    <div><h4>Notify user</h4></div>
                    <hr/>
                    <div><h4>Notify team</h4></div>
                </div>
            </div>
        </div>
    )
}

export default Notification;