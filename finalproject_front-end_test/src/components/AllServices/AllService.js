import React from 'react';
import Service from './Service'
import { getAllService , closeService } from '../api';
// import './Tickets.css'; 
export default class AllTicket extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        Services:null, 
        };
      }
    componentDidMount(){
         // Mack API call to det all the Ticket that not have closed state  
         getAllService()
        .then( (repose)=>{
            console.log('repose.data' , repose.data )
            const Services = repose.data.filter((Service) => {
                if(Service.ServiceState !== 'closed'){
                    return repose.data
                }
              });this.setState( {Services} );
        })
        .catch( (error)=>{
            console.log(' API error: ',error );
        })
    }
          closeOneService = (id) => {
               // Make an API Call to close a ticket
            closeService(id)
            .then( (res)=>{
              const newList = this.state.Services.filter((Service) => {
                  return Service._id !== id;
                });
                this.setState( {Services:newList} );
            })
             .catch( (err)=>{
             })
          }
   render(){
      let allServices = <h3> No Services! :( </h3>
      if(this.state.Services !== null ){
      allServices= this.state.Services.map( (Services , index)=> {
          return(
          <Service 
          id={Services._id}
          ServiceType={Services.ServiceType}
          ServiceState={Services.ServiceState}
          ServiceDescription={Services.ServiceDescription}
          closeOneService={this.closeOneService}
          key={index} /> 
          );
      })}
    return(
        <div className="content">
            <h2>ALL Service</h2>
            <ul className="timeline">
            {allServices}
        </ul>
        </div>);
  }
}