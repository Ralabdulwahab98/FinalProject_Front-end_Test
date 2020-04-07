/* eslint-disable react/jsx-no-undef */
import React from "react";
import "./header.css";
import { getInfo } from "../login/decodeToken";
import ReceivedServices from "../ReceivedServices/ReceivedServices";
import { Route, BrowserRouter, Link } from "react-router-dom";
import ListOfServices from "../home/ListOfServices";
export default class WorkerHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  logOut = e => {
    e.preventDefault();
    this.props.history.push('/')
    localStorage.clear('currentUser')
  }

  render() {
    let info = getInfo().data
    return (
      <BrowserRouter>
        {/* <Switch> */}
        <div>
          <div className="big-div">
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
                <Link to="/ListOfServices">
                  <img
                    id="img1"
                    src="https://t4.ftcdn.net/jpg/00/97/00/07/240_F_97000769_R4zepLTgmf8G22W7G2o8JA1HeiVK2CkK.jpg"
                    alt="" />
                </Link>
                <div id="divaa1">
                  {/* <Link to="/Profile"> */}
                  <input id="btna1" type="button" value={info.Username} />
                  <input id="btna2" type="button" value={info.FullName} />
                  <input id="btna3" type="button" value={info.Phone} />
                  <img
                    id="img2"
                    src={require("../../images/profile.png")}
                    alt="" />
                  {/* </Link> */}
                </div>
                <div id="divaa2">
                  <Link to="/CustomerHeader/RequestServices">
                    <img
                      id="img3"
                      src={require("../../images/share.png")}
                      alt="" />
                  </Link>
                </div>
                <div id="divaa4">
                {/* <Link to="/CustomerHeader/RequestServices"> */}
                  <img
                    id="img5"
                    src={require("../../images/history.png")}
                    alt=""/>
                {/* </Link> */}
              </div>
              <div id="divaa5">
                {/* <Link to="/CustomerHeader/RequestServices"> */}
                  <img
                    id="img6"
                    src={require("../../images/hourglass.png")}
                    alt=""/>
                {/* </Link> */}
              </div>
                <div id="divaa3">
                  <Link onClick={e => this.logOut(e)}>
                    <img
                      id="img4"
                      src={require("../../images/logout.png")}
                      alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <Route path={'/CustomerHeader/RequestServices'} component = {RequestServices} /> */}
          {/* <RequestServices /> */}
        </div>
        <Route
          path="/CustomerHeader/RequestServices"
          render={() => <ReceivedServices />}
        />
        <Route
          path="/ListOfServices"
          render={() => <ListOfServices />}
        />
        {/* </Switch> */}
      </BrowserRouter>
    );
  }
}
