import React from 'react';
export default class ProgressList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    };
  }

    closeClick = (e) => {
        e.preventDefault();
        this.closeOneSerives(this.props.id);
      }
//price map 
  render(){
    const AllPrice = this.props.AllPrice.map((Prices)=>{
      return(
        <div>
          {Prices.ServicePrice}
          {Prices.ServicesEmp}
          <button onClick={this.closeClick}>Close</button>
        </div>
      )
    })

    return(
        <li className="event">
          <div className="member-infos">
            <h1 className="member-title">
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