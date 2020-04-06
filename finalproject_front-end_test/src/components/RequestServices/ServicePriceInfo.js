import React from 'react';
import {userInfo} from '../api';
export default class ServicePriceInfo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      toggle:false, 
      
    };
  }

 // To display or not the Service description  
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

    // chaneg the Service state to on progress
    progressClick = (e) => {
        e.preventDefault();
        this.props.ProgressService(this.props.id);
      }


  render(){

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
    </>)
}

}