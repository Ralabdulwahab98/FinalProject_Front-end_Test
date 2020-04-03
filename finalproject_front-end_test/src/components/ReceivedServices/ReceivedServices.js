//ALL Received Tickets 
import React from 'react';
import ReceivedService from './ReceivedService'
import { getReceivedServices } from '../api';
// import '../SendTicket/SendTickets.css';
import { getInfo } from '../login/decodeToken'

export default class ReceivedServices extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            Emp_ReceivedServices: [],
        };
    }
    componentDidMount() {
        // Take the id of curretn user
        let mId = getInfo().data._id

        // Mack API call 
        // getReceivedServices("5e70bf444d6ce11c64e4e3ad")
        getReceivedServices(mId)
            .then((reponse) => {
                console.log('reponse.data', reponse.data)
                this.setServices(reponse.data)
            })
            .catch((error) => {
                console.log(' API error: ', error);
            })
    }
    setServices = (Emp_ReceivedServices) => {
        this.setState({ Emp_ReceivedServices });
    }


    render() {
        let allServices = <h3> No Services! :( </h3>

        if (this.state.Emp_ReceivedServices.length > 0) {
            allServices = this.state.Emp_ReceivedServices.map((Services, index) => {
                return (
                    <ReceivedService
                        id={Services._id}
                        ServiceType={Services.ServiceType}
                        Servicestate={Services.ServiceState}
                        ServiceDescription={Services.ServiceDescription}
                        key={index} />
                );
            })
        }

        return (
            <div className="content">
                <h2>Received Service</h2>
                <ul className="TimeLineReceivedServices">
                    {allServices}
                </ul>
            </div>);
    }

} 