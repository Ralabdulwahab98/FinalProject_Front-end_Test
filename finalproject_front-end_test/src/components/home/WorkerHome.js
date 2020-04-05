import React from "react";
import { getInfo } from "../login/decodeToken";
import { WorkerService } from "../api";
import './card.css'; 

export default class WorkerHome extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Services:null,
         };
    }
    componentDidMount(){
        // Mack API call to det all the Ticket that not have closed state  
        let ID = getInfo().data._id
        WorkerService(ID)
       .then( (repose)=>{
           console.log('repose.data' , repose.data )
           const Services = repose.data.filter((Service) => {
               if(Service.ServiceState == 'Open'){
                   return repose.data
               }
             });this.setState( {Services} );
       })
       .catch( (error)=>{
           console.log(' API error: ',error );
       })
   }


   render(){
    let allServices = <h3> No Request Service Yet! :( </h3>
    if( this.state.Services !== null ){
    allServices= this.state.Services.map( (Services , index)=> {
        return(
            
          <div className="movie_card" id="bright">
            <div className="info_section">
              <div className="movie_header">
          
                <h1>{Services.ServiceType}</h1>
                <p className="type">{Services.ServiceState}</p>
              </div>
              <div className="movie_desc">
                <p className="description"> {Services.ServiceDescription} </p>
              </div>
              <div className="movie_social">
                <ul>
                  <li><i className="material-icons">click to add price</i></li>
                </ul>
              </div>
            </div>
            <div className="blur_back bright_back"></div>
          </div>
        );
    })}
  return(
      <div className="allServices">
          {allServices}
      </div>
      );
}
}
