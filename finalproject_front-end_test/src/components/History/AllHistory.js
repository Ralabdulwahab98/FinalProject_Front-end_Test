// All History

import React from "react";
import HistoryList from "./HistoryList"
import { getAllClosedService , deleteOneService } from "../api";
import { getInfo } from '../login/decodeToken';

export default class AllHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          History: [],
        };
    }
        componentDidMount(){
        // Mack API call 
        let ID = getInfo().data._id
        getAllClosedService(ID)
        .then( (reponse)=>{
            console.log('getAllClosedService  == >' , reponse.data )
            this.setState({History: reponse.data})
        })
        .catch( (error)=>{
            console.log(' API error: ',error );
        })
    }

    delete = (id) => {
         // Make an API Call to delete a service

         console.log( `Make an API Call to delete a service the ${id} `)
         deleteOneService(id)
            .then((res) => {
                const History = this.state.History.filter((History) => {
                    return History._id !== id; 
                });
                this.setState({ History});
            })
            .catch((err) => {
            })
    }

    render(){
      //map for get the 
      let AllHistory 
          if(this.state.History.length > 0 ){
            AllHistory= this.state.History.map( (Services , index)=> {
              return(
              <HistoryList
              id={Services._id}
              ServiceType={Services.ServiceType}
              ServiceState={Services.ServiceState}
              ServiceDescription={Services.ServiceDescription}
              deletOneSerives={this.delete}
              key={index} /> 
              );
          })}

      return(
          <div className="allServices">
          {AllHistory}
          </div>);
      
  }


}
