import React from 'react';
import {userInfo} from '../api';
export default class RequestService extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      toggle:false, 
      workerInfo:null
      
    };
  }
//    // To display or not the Service description  
   ServicesClicked = (e) => {
    e.preventDefault();
    console.log("Service Worker info..")
        this.setState({ toggle:! this.state.toggle }); 
    
}

// chaneg the Service state to on progress
progressClick = (e) => {
  e.preventDefault();
  this.props.ProgressService(this.props.id);
}


getWorkerDataByID = (id) => {
  // Make an API Call to onprogress a service
  userInfo(id)
        .then( (reponse)=>{
            console.log('workerInfo ==> reponse.data ===> ' , reponse.data )
            this.setState( {workerInfo: reponse.data} )
        })
        .catch( (error)=>{
            console.log(' API error: ',error );
        })

}
//price map 
  render(){
    const AllPrice = this.props.AllPrice.map((Prices)=>{
      return(
        <>
          <button onClick={this.ServicesClicked} >{Prices.ServicePrice}</button>
          {this.state.toggle === true ? 
          <div className="movie_social">
            <p> Service Worker info.. </p>
            <button onClick={this.progressClick}>Accept</button>
           </div> 
            : ''
          }
          </>
      )
    })

    return(
                  <div className="movie_card" id="bright">
                  <div className="info_section">
                    <div className="movie_header">
                
                      <h1>{this.props.ServiceType} </h1>
                      <p className="type">{this.props.ServiceState}</p>
                    </div>
                    <div className="movie_desc">
                      <p className="description"> {this.props.ServiceDescription} </p>
                      {AllPrice}
                    </div>
                  </div>
                  <div className="blur_back bright_back"></div>
                </div>
    );
  }
}