import React from "react";
import './ServiceForm.css';
import { getInfo } from "../login/decodeToken";
import { AddNewService } from "../api";
import icon from '../../images/done.png'
export default class ServiceForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ServiceType: "Electrician",
            ServiceDescription: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.formAdd = this.formAdd.bind(this);
    }

    addService = info => {
        // Make an axios request
        console.log("info ==> ", info);
        let id = getInfo().data._id;
        
        AddNewService(info, id)
            .then(response => {
                console.log(`The Service of customer ${id} has been added successfully.`);
            })

            .catch(error => {
                console.log("API ERROR: ", error);
            });
    };


    handleChange = e => {
               this.setState({
            [e.target.name]: e.target.value
        });

    }
 

    formAdd = e => {
        const newService = this.state;
        this.props.tog(e)
        console.log(" formAdd (newService) ==> ", newService);
        e.preventDefault();
        this.addService(newService);
    };

    render() {
        return (
            <div className="modal">
                <div className="side">
                    <div className="skew">
                        <h3> {`${this.state.ServiceType}`} </h3>
                        <img src={icon} />
                    </div>
                </div>

                <div className="header">
                    <h1>Enter Service Details</h1>
                </div>
                <div className="form">
                    <form onSubmit={e=>this.formAdd(e)}>
                        <fieldset className="name">
                            <label htmlFor="name">Description</label>
                            <input 
                            id="name" 
                            type="text"
                            name="ServiceDescription"
                            // required
                            onChange={e=>this.handleChange(e)} 
                            value={this.state.ServiceDescription}/>

                        </fieldset>
                        <button type="submit">Confirm</button>
                    </form>
                </div>
            </div>
        );
    }
}
