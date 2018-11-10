import React from 'react';

const Overtime = (props) => {

    return(
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
    )
}

export default Overtime;