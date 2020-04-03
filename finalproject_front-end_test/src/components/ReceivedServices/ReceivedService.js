import React from 'react';
// import EditTicket from '../NewTicket/EditTicket';
import { getInfo } from '../login/decodeToken';
import {UpdateService} from '../api';
export default class ReceivedService extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            toggle:false,
            Fltir: 'none',
        };
    }
    // EditUpdateService = (tic) => {
    //     // Make an axios request
    //     console.log(tic,"update");
    //     let mId = getInfo().data._id
      
    //     UpdateService(tic,this.props.id)
    //       .then(response => {
    //             //alert message!!!!!!!!    
    //           })
    //       .catch(error => {
    //         console.log("API ERROR: ", error);
    //       });
    //   };
    // To display or not the ticket description  
    ServiceClicked = (e) => {
        if (this.state.Fltir === 'none') {
            this.setState({
                Fltir: 'display',
            });
        }
        else {
            this.setState({ Fltir: 'none' });
        }
    }

    togglehandler(e) {
        e.preventDefault();
        this.setState({
            toggle: true
        })
    }
    render() {
        return (
            <div>
                {/* { this.state.toggle=== false? */}

                <li className="event">
                    <div className="member-infos">
                        <h1 onClick={this.ServiceClicked}>
                            {this.props.ServiceState}
                        </h1>
                        <div className={`Description-${this.state.Fltir}`}>
                        <span > {this.props.ServiceType} </span>
                        <h2> {this.props.ServiceDescription} </h2>
                            {/* <button onClick={e => this.togglehandler(e)} className="raise"> Edit </button> */}
                        </div>
                    </div>
                </li>
                {/* // :  <EditTicket  EditUpdateService={this.EditUpdateService}/> */}
  }
            </div>
        );
    }

}