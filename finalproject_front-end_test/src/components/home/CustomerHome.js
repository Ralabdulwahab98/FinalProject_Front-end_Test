import React, { Component } from 'react'
import './CustomerHome.scss'
export default class CustomerHome extends Component {
  render() {
    return (
      <div>
        <div class="all">
          <div class="lefter" >
            <div class="text">Electrician</div>
          </div>
          <div class="left">
            <div class="text">Plumber</div>
          </div>
          <div class="center">
            <div class="explainer"><span>Services</span></div>
            <div class="text">Services</div>
          </div>
          <div class="right">
            <div class="text">Painter</div>
          </div>
          <div class="righter">
            <div class="text">Builder</div>
          </div>
        </div>


      </div>
    )
  }
}
