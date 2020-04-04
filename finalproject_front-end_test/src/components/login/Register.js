import React, { Component } from "react";
import { AddNewCustomer } from '../api';
// import { useHistory } from "react-router-dom";
// import PropTypes from 'prop-types';
// import { withRouter } from "react-router-dom";
import Back from "./Back";
import "./login.css";
export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            FullName: "",
            Username: "",
            password: "",
            Email: "",
            Phone: "",
            UserType: "",
            Worker: false,
        };

        this.change = this.handleChange.bind(this);
        this.submit = this.formSubmit.bind(this);
        // this.goBack = this.goBack.bind(this)
    }
    WorkerToggle(e) {
        e.preventDefault();
        this.setState({
            Worker: true,
        })
    }
    CustomerToggle(e) {
        e.preventDefault();
        this.setState({
            Worker: false,
            UserType: "Customer",
        })
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addCustomer = Customer => {
        // Make an axios request
        console.log(" addCustomer ==> ", Customer);
        // let mId = getInfo().data._id
        AddNewCustomer(Customer)
            .then(response => {
                // Alert Massge 
                console.log(`The Customer ${Customer.FullName} has been added successfully.`);
            })
            .catch(error => {
                console.log("API ERROR: ", error);
            });
    };

    formSubmit = e => {
        const newCustomer = this.state;
        console.log(" newCustomer ==> ", newCustomer);
        e.preventDefault();
        this.addCustomer(newCustomer);
        // BrowserHistory.goBack
        // console.log(`history  ${this.props.history}`);
        // this.props.history.goBack();
    };

    render() {
        // let history = useHistory();
        return (
            // <BrowserRouter>
            <div>

                <form className="login" onSubmit={e => this.submit(e)}>
                    <button type="button" onClick={e => this.CustomerToggle(e)}>Customer</button>
                    <button type="button" onClick={e => this.WorkerToggle(e)}>Worker</button>
                    <input
                        type="text"
                        placeholder="FullName"
                        name="FullName"
                        onChange={e => this.change(e)}
                        value={this.state.FullName}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        name="Email"
                        onChange={e => this.change(e)}
                        value={this.state.Email}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        onChange={e => this.change(e)}
                        value={this.state.password}
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        name="Username"
                        onChange={e => this.change(e)}
                        value={this.state.Username}
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        name="Phone"
                        onChange={e => this.change(e)}
                        value={this.state.Phone}
                    />
                    {this.state.Worker === true ?
                        <>
                         <select
                        name="UserType"
                        type="text"
                        onChange={this.change}>

                        <option value={this.state.UserType = "Electrician"}>Electrician</option>
                        <option value={this.state.UserType = "Plumber"}>Plumber</option>
                        <option  value={this.state.UserType = "Services"}>Services</option>
                        <option  value={this.state.UserType = "Painter"}>Painter</option>
                        <option  value={this.state.UserType = "Builder"}>Builder</option>
                  
                      </select>  
                        </>
                        :
                        <> </>
                    }
                    <br></br>
                    <Back />
                </form>
                <h2>&nbsp;</h2>
                

            </div>

        );
    }


}



// export default {Register}
