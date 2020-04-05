import React from 'react';
export default class RequestService extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      Fltir:'none', 
    };
  }
   // To display or not the Service description  
   ServicesClicked = (e) => {
    e.preventDefault();
    if( this.state.Fltir === 'none'){
       this.setState({ 
         Fltir:'display', }); 
    }
    else{
        this.setState({ Fltir:'none' }); 
    }
}
// chaneg the Service state to on progress
progressClick = (e) => {
  e.preventDefault();
  this.props.ProgressService(this.props.id);
}
//price map 
  render(){
    const AllPrice = this.props.AllPrice.map((Prices)=>{
      return(
        <div>
          {Prices.ServicePrice}
          {Prices.ServicesEmp}
          <button onClick={this.progressClick}>Accept</button>
        </div>
      )
    })

    return(
        <li className="event">
          <div className="member-infos">
            <h1 className="member-title"
            onClick={e => this.ServicesClicked(e)}>
                {this.props.ServiceState}
           </h1>
           <div className={`Description-${this.state.Fltir}`}>
             <h2> {this.props.ServiceDescription} </h2>
                <div class="member-parameters">
                <li class="member-follower">
                  <span class="followers">
                  {this.props.ServiceType}
                  {AllPrice}
                  </span>
                  </li>
                  
                </div>
          </div>
          
          </div>        
        </li>
    );
  }
}