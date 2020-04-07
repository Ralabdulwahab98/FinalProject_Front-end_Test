import React, { Component } from 'react'
import WorkerHome from './WorkerHome'
import { getInfo } from "../login/decodeToken";
import {WorkerService,WaitingService} from '../api'
export default class ListOfServices extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Service: null,
    
        };
    }

    
    componentDidMount(){
        // Mack API call to get all service that match to worker job
        let ID = getInfo().data._id
        WorkerService(ID)
       .then( (repose)=>{
           console.log('repose.data' , repose.data )
           const AllServices = repose.data.filter((Services) => {
               if(Services.ServiceState === 'Open'){
                   return repose.data
               }
           })
             this.setState({Service:AllServices});
       })
       .catch( (error)=>{
           console.log(' API error: ',error );
       })
   }

   UpdateServiceById = (id) => {
    WaitingService(id)
 .then( (res)=>{

 })
  .catch( (err)=>{
  })
}

    render(){
        console.log(this.state.Service)
        let Service = <h3> No Service Match you're job.. </h3>
        if(this.state.Service !== null ){
            console.log(this.state.Service)
            Service = this.state.Service.map((Services , index )=> {
            return(
            <WorkerHome 
            Service={this.state.Service}
            id={Services._id}
            ServiceType={Services.ServiceType}
            ServiceState={Services.ServiceState}
            ServiceDescription={Services.ServiceDescription}
            waiting = {this.UpdateServiceById()}
            key={index} /> 
            );
        })}
      return(
          <div className="allServices">
              {Service}    
          </div>
          );
    }


}
