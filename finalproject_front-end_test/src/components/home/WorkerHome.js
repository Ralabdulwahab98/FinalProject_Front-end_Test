import React from "react";
import { getInfo } from "../login/decodeToken";
import { WorkerService } from "../api";

export default class WorkerHome extends React.Component{
    constructor(props){
        super(props)
        this.state={
            servies:[]
         };
    }
    componentWillMount(){
        //Make Api Call
        // allservice = worker =>{
        let wId = getInfo().data._id
        WorkerService(wId)
        .then((res)=>{
            console.log('res.data' ,res.data)
            this.setServices(res.data)
        })
        .catch((error)=>{
            console.log('API error:',error);
        })
    
    }

    setServices = (servies) => {
        this.setState({ servies });
    }


    render(){
     const  allServices=this.state.servies.map((service) =>{
         return(
             <div>
            <li> {service.ServiceType}</li>
           <li>{service.ServiceState}</li> 
            <li>{service.ServiceDescription}</li> </div>);
            });
        return(
<div>
    <h2>All Servies</h2>
    <ul>
      {allServices}
    </ul>
</div>
        );
    }
}