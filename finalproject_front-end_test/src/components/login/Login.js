import React, { Component } from "react";
import axios from "axios";
import apiURL from '../../APIconfig';

import { getInfo } from "./decodeToken";

import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Username: "",
      password: ""
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();

    axios
      .post(`${apiURL}/customer/login`, {
        Username: this.state.Username,
        password: this.state.password
      })
      .then(res => {
        console.warn("res", res);
        localStorage.setItem("currentUser", res.data.token);
        let jwt1 = getInfo().data.admin;

        if (jwt1 === true) {
          console.log("a:", jwt1);
          this.props.history.push("/AdminHeader");
        } else if (jwt1 === false) {
          console.log("B:", jwt1);
          this.props.history.push("/EmpHeader");
        } else if (jwt1 === undefined) {
          console.log("b: ", jwt1);
          this.props.history.push("/");
        }

        return res;
      })
      .catch(error => {
        console.log("ERROR: ", error);
      });
  }

  render() {

    return (


      <div>

        <form className="login" onSubmit={e => this.submit(e)} >
        <input
              type="text"
              name="Username"
              onChange={e => this.change(e)}
              value={this.state.Username}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={e => this.change(e)}
              value={this.state.password}
            />
          <button
            type="submit" >Login</button>
            <br></br>
           <button>Register</button>
        </form>
        <h2>&nbsp;</h2>

      </div>




    );
  }
}

export default Login;
