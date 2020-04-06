import React from 'react';
import { getRequestService, closeService } from '../api';
import { getInfo } from '../login/decodeToken';
import ProgressList from './ProgressList';
export default class OnProgressList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cus_RequestServices:[]
        }
    }
    componentDidMount(){
        // Mack API call 
        let mId = getInfo().data._id
        getRequestService(mId)
        .then( (reponse)=>{
            console.log('reponse.data' , reponse.data )
            const closeServiecs = reponse.data.filter((Service)=>{
             if(Service.ServiceState === 'On Progress'){
                 return reponse.data
             }
            });
            this.setServices(closeServiecs)
        })
        .catch( (error)=>{
            console.log(' API error: ',error );
        })
    }
    setServices = (cus_RequestServices) =>{
        this.setState( {cus_RequestServices} );
      }


    closeOneSerives = (id) => {
        // Make an API Call to close a Services
        closeService(id)
     .then( (res)=>{
       const newList = this.state.cus_RequestServices.filter((Service) => {
           return Service._id !== id;
         });
         this.setState( {cus_RequestServices:newList} );
     })
      .catch( (err)=>{
      })
   }


    render(){
        //map for get the 
        let allServices 
            if(this.state.cus_RequestServices.length > 0 ){
              allServices= this.state.cus_RequestServices.map( (Services , index)=> {
                return(
                <ProgressList
                id={Services._id}
                ServiceType={Services.ServiceType}
                ServiceState={Services.ServiceState}
                ServiceDescription={Services.ServiceDescription}
                AllPrice={Services.AllPrice}
                closeOneSerives={this.closeOneSerives}
                key={index} /> 
                );
            })}

        return(
            <div className="allServices">
            {allServices}
            </div>);
        
    }
}