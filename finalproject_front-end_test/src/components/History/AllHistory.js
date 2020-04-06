// All History

import React from "react";
// import HistoryTicket from "./HistoryTicket"
import { getAllClosedService , deleteOneService } from "../api";
import { getInfo } from '../login/decodeToken';

export default class AllHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          History: null,
        };
    }
    // componentDidMount() {
    //     // Mack API call to det all the Ticket of closed state 
    //     getAllTicket()
    //         .then(repose => {
    //             console.log("reponse.data", repose.data);
    //             const history = repose.data.filter((Ticket) => {
    //                 if (Ticket.ServiceState === "closed") {
    //                     return repose.data;
    //                 }
    //             })
    //             this.setState({ history });
                
    //         })
    //         .catch(error => {
    //             console.log(" API error: ", error);
    //         });
    // }
        componentDidMount(){
        // Mack API call 
        let mId = getInfo().data._id
        getAllClosedService(mId)
        .then( (reponse)=>{
            console.log('reponse.data' , reponse.data )
            this.setState({History: reponse.data})
        })
        .catch( (error)=>{
            console.log(' API error: ',error );
        })
    }

    delet = (id) => {
         // Make an API Call to delete a ticket
         deleteOneService(id)
            .then((res) => {
                const history = this.state.history.filter((Ticket) => {
                    return Ticket._id !== id; 
                });
                this.setState({ history});
            })
            .catch((err) => {
            })
    }

    render(){
        let AllHistory 
        if(this.state.History !== null ){
          AllHistory= this.state.History.map( (Services,index)=> {
            return(
              <div className="movie_card" id="bright">
              <div className="info_section">
                <div className="movie_header">
      
                  <h1>{Services.ServiceType} </h1>
                  <p className="type">{Services.ServiceState}</p>
                </div>
                <div className="movie_desc">
                  <p className="description"> {Services.ServiceDescription} </p>
               </div>
               <div class="movie_social" onClick={this.delet(Services._id)}>
               <ul><i><i class="material-icons">Delet</i></i></ul>
                  </div>
              </div>
              <div className="blur_back bright_back"></div>
            </div>
            );
        })}
      return(
          <div className="allServices">
              {AllHistory}
          </div>);
    }


}
