import React from 'react';
import RequestService from './RequestService'
import { getRequestService } from '../api';
// import './SendTickets.css'; 
import {getInfo} from '../login/decodeToken'
export default class RequestServices extends React.Component{

    constructor(props){
        super(props)

        this.state = {
       cus_RequestServices:[], 
        };
      }

    componentDidMount(){
        // Mack API call 
        let mId = getInfo().data._id
        getRequestService(mId)
        .then( (reponse)=>{
            console.log('reponse.data' , reponse.data )
            this.setServices(reponse.data)
        })
        .catch( (error)=>{
            console.log(' API error: ',error );
        })
    }

    setServices = (cus_RequestServices) =>{
        this.setState( {cus_RequestServices} );
      }


   render(){
      let allTickets = <h3> No Tickets! :( </h3>

      if(this.state.cus_RequestServices.length > 0 ){
      allTickets= this.state.cus_RequestServices.map( (Services , index)=> {
          return(
          <RequestService 
          id={Services._id}
          ServiceType={Services.ServiceType}
          Servicestate={Services.ServiceState}
          ServiceDescription={Services.ServiceDescription}
          key={index} /> 
          );
      })}

    return(
        <div className="content">
            <h2>Your Services</h2>
        <ul className="timeline">
            {allTickets}
        </ul>
        <button onClick={this.props.toggle} > Go back </button>

        </div>);
  }

} 