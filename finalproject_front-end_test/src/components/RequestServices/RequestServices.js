import React from 'react';
import RequestService from './RequestService'
import { getRequestService, OnProgressService} from '../api';
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
            const openServiecs = reponse.data.filter((Service)=>{
             if(Service.ServiceState === 'Open'){
                 return reponse.data
             }
            });
            this.setState( {cus_RequestServices:openServiecs} )
        })
        .catch( (error)=>{
            console.log(' API error: ',error );
        })
    }


      changeStateToProgressService = (id) => {
        // Make an API Call to onprogress a service
        OnProgressService(id)
       const newList = this.state.cus_RequestServices.filter((Service) => {
           return Service._id !== id;
      })
      this.setState( {cus_RequestServices:newList} );

   }
   
   render(){
       let allServices = <h3> No Services! :( </h3>

      if(this.state.cus_RequestServices.length > 0 ){
        allServices= this.state.cus_RequestServices.map( (Services , index)=> {
          console.log("AllPrice",Services.AllPrice[0].ServicesEmp)
          return(
          <RequestService 
          id={Services._id}
          ServiceType={Services.ServiceType}
          ServiceState={Services.ServiceState}
          ServiceDescription={Services.ServiceDescription}
          AllPrice={Services.AllPrice}
          workerId={Services.AllPrice[0].ServicesEmp}
          ProgressService={this.changeStateToProgressService}
          key={index} /> 
          );
      })}

    return(
        <div className="allServices">
            {allServices}
        </div>
        
        
        
        );
  }

} 