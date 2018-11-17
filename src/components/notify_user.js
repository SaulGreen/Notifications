import React, { Component } from 'react';

// const EMPLOYEES_URL = "http://10.56.49.188:3004/employees";
const URL_NOTIFICATIONS = 'http://10.56.49.187:8000/notifications';
 
class NotifyUser extends Component{
    constructor(props){
        super(props);

        this.state = {
            employees:''
        }

        this.empId = React.createRef();
        this.notTitle = React.createRef();
        this.notBody = React.createRef();
    }

    // addEmployees = () => {
    //     if(this.state.employees){
    //         return this.state.employees.map((employee,index) => {
    //             return <option key={index} value={employee.id}>{employee.name}</option>
    //         })
    //     }
    // }

    pushNotifications(){
        if(this.state.employees){

            fetch(URL_NOTIFICATIONS,{
                method: 'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    type: "events",
                    empId: this.empId.current.value,
                    notTitle: this.notTitle.current.value,
                    notBody: this.notBody.current.value
                })
            }).then(response => response.json())
            .then(json => {
                console.log("Reponse", json);
            }).catch(error => {
                console.error("Error", error);
            })
        }
    }

    componentDidMount(){
        console.log("Notify user mounted");
        // fetch(EMPLOYEES_URL,{
        //     method:'GET'
        // }).then(function(response){
        //     return response.json();
        // }).then(json => {
        //     this.setState({
        //         employees:json.employees
        //     })
        //     console.log("Employees", this.state.employees);
        // }).catch(error => {
        //     console.log(error)
        // })
    }

    render(){
        return(
            <div className="event_reminder">
                <div className="event_setup">
                    <label>Employee: </label>
                    <select ref={this.empId} defaultValue="0" className="event_element event_select event_picker notify_user">
                        <option value="null">Select user...</option>
                        <option value="fxh2hyL9NlQ:APA91bFsk7qpGYUJP63-qH2vq4tO76TxoJkFnQE2WDD6lR999-nuNwAmiYkRsVeyVr7msjRNFCcITTUJsFOuGZj0g3bNQ5v_6etXZ7tPdCqFRRXNXk8v-vfODYYbX141TO4Lt_kI8CjY">Charly Pepe de Chuy Cardiel</option>
                        <option value="e71p2tt68I4:APA91bERdvKkHdG7wB1C3k2hZxiVG1UkxatV62MmnPmHRgOoN27xtw-52ODkFl21EBpDCP5UynIekGTEBc9GEQJmi9Gh_HjeFvbjs6F8EwvBabjmjTxalehtuwMMfG6W68iPhWHkHicT">Avan Ramirez</option>
                        <option value="dWujiPVtQOs:APA91bFarv6Zx5aF7GywKXMSQaaJ1_bBvmgAAb4aghD6KizfJ43pO2K5a01D3NVYYNVEnjKiPeG_e-N6dcnJft2tHLGhn0cKZKbL5PNXJU-WM9FnqArWe7bHCn2R7noyjqNWFqCIJBXq">Marco Menchaca</option>
                        {/* {this.addEmployees()} */}
                    </select>
                    <label>Notification header: </label><input ref={this.notTitle} className="event_element event_date" type="text" placeholder="Notification title..."/>
                    <button className="event_element event_button" type="button" onClick={this.pushNotifications.bind(this)}>Send</button>
                </div>
                <div className="event_description">
                    <textarea ref={this.notBody} className="event_text" placeholder="Insert full text here..."></textarea>
                </div>
            </div>
        )
    }
}

export default NotifyUser;