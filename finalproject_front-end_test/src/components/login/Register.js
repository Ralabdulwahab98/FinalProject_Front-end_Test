import React, { Component } from "react";
import { AddNewCustomer } from '../api';
import { getInfo } from "./decodeToken";

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
        };

        this.change = this.handleChange.bind(this);
        this.submit = this.formSubmit.bind(this);
    }

    handleChange = event =>
        this.setState({
            [event.target.name]: event.target.value
        });

    addCustomer = Customer => {
        // Make an axios request
        console.log(" addCustomer ==> ", Customer);
        let mId = getInfo().data._id
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
        console.log(" newCustomer ==> " , newCustomer);
        e.preventDefault();
        this.addCustomer(newCustomer);
    };

    render() {

        return (


            <div>

                <form className="login" onSubmit={e => this.submit(e)} >
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
                    <br></br>
                    <button type="submit" >Register</button>
                </form>
                <h2>&nbsp;</h2>

            </div>




        );
    }
}

