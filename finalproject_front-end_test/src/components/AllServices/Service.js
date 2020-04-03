import React from 'react';
export default class Service extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      Fltir:'none', 
    };
  }
  // To display or not the Service description  
  ServiceClicked = (e) => {
     if( this.state.Fltir === 'none'){
        this.setState({ 
          Fltir:'display', }); 
     }
     else{
         this.setState({ Fltir:'none' }); 
     }
}
// chaneg the Service state to closeed
closeClick = (e) => {
  e.preventDefault();
  this.props.closeOneService(this.props.id);
}

  render(){
    return(
      <li className="event">
      <div className="member-infos">

      <h1 className="member-title"
        onClick={this.ServiceClicked}>
          {this.props.ServiceState} 
      </h1>

        <div className={`Description-${this.state.Fltir}`}>
        <h2>{this.props.ServiceDescription}</h2>
          <span class="shots-number">{this.props.ServiceType}</span>
          <button className="raise"
          onClick={this.closeClick}> Close </button>
             </div>
      </div>
      </li>
    );
  }
}