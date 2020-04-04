import React from "react";
import "./header.css";
import RequestServices from "../RequestServices/RequestServices";
import { Route, BrowserRouter, Link } from "react-router-dom";
import CustomerHome from "../home/CustomerHome";
export default class CustomerHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logOut = e => {
    e.preventDefault();
    this.props.history.push("/");
    localStorage.clear("currentUser");
  };
  render() {
    return (
      <BrowserRouter>
        {/* <Switch> */}
        <div>
          <div id="div1">
            <div id="rock1"></div>
            <div id="rock2"></div>
            <div id="rock3"></div>
            <div id="rock4"></div>
            <div id="rock5"></div>
            <div id="rock6"></div>
            <div id="rock7"></div>
            <div id="rock8"></div>
            <div id="diva1">
              <Link to="/home">
                <img
                  id="img1"
                  src="https://t4.ftcdn.net/jpg/00/97/00/07/240_F_97000769_R4zepLTgmf8G22W7G2o8JA1HeiVK2CkK.jpg"
                  alt=""/>
              </Link>
              <div id="divaa1">
                {/* <Link to="/Profile"> */}
                <input id="btna1" type="button" value="Theme" />
                <input id="btna2" type="button" value="Profile" />
                <input id="btna3" type="button" value="More" />
                <img
                  id="img2"
                  src="https://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png"
                  alt=""/>
                {/* </Link> */}
              </div>
              <div id="divaa2">
                <Link to="/CustomerHeader/RequestServices">
                  <img
                    id="img3"
                    src="https://cdn3.iconfinder.com/data/icons/care-4/100/Service-512.png"
                    alt=""/>
                </Link>
              </div>
              <div id="divaa3">
                <Link onClick={e => this.logOut(e)}>
                  <img
                    id="img4"
                    src="https://cdn2.iconfinder.com/data/icons/picons-essentials/57/logout-512.png"
                    alt=""/>
                </Link>
              </div>
            </div>
          </div>

          {/* <Route path={'/CustomerHeader/RequestServices'} component = {RequestServices} /> */}
          {/* <RequestServices /> */}
        </div>
        <Route
          path="/CustomerHeader/RequestServices"
          render={() => <RequestServices />}
        />
          <Route
          path="/home"
          render={() => <CustomerHome/>}
        />
        
        
        {/* </Switch> */}
      </BrowserRouter>
    );
  }
}
