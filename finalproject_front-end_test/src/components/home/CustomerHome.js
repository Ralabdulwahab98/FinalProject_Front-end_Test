import React, { Component } from 'react'
import './CustomerHome.scss'
import ServiceForm from '../NewService/ServiceForm';
export default class CustomerHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: false,
    };
  }
  togglehandler(e){
    e.preventDefault();
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <>
       {this.state.toggle === false?
      <div>
        <div className="all">
          <div className="lefter" 
          onClick= {e=>this.togglehandler(e)}>
            <div className="text">Electrician</div>
          </div>
          <div className="left"
          onClick= {e=>this.togglehandler(e)}>
            <div className="text">Plumber</div>
          </div>
          <div className="center"
          onClick= {e=>this.togglehandler(e)}>
            <div className="explainer"><span>Services</span></div>
            <div className="text"
            onClick= {e=>this.togglehandler(e)}>Services</div>
          </div>
          <div className="right"
          onClick= {e=>this.togglehandler(e)}>
            <div className="text">Painter</div>
          </div>
          <div className="righter"
          onClick= {e=>this.togglehandler(e)}>
            <div className="text">Builder</div>
          </div>
        </div>
      </div>    
      : <ServiceForm tog={e=>this.togglehandler(e)}/>
      }
      </>
    )
  }
}
