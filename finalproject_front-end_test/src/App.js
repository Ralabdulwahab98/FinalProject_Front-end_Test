import React from 'react';
import apiURL from'./APIconfig';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import CustomerHome from '../src/components/home/CustomerHome'
// Components
import "./components/login/login.css";
import Login from './components/login/Login'
import CustomerHeader from './components/Header/CustomerHeader'
import WorkerHeader from './components/Header/WorkerHeader';
import AuthComponent from './components/login/AuthenticatedComponent';
import Register from './components/login/Register'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  

    this.state = {
      toggle: true,
    };}

// **  Component Tree **
      // 0 -Login

        // 1 -AuthComponent

            // 2- AuthComponent:
            //    2.1 AdminHeader:
            //        * AllTicket => display all tickets
            //          - Ticket => display one ticket of all tickets

            //        * HistoryTickets => display all history ticket
            //          - HistoryTicket => display one ticket of all history tickets

            //        * NewEmployee => display form to add new employee



            //    2.2 EmpHeader:
            //        * SendTickets => display all employee send ticket
            //          - SendTicket => display one ticket of all send tickets

            //        * ReceivedTickets => display all employee received ticket
            //          - ReceivedTicket => display one ticket of all received tickets
            //            . EditTicket => display EditForm component
            //              .. EditForm => display form to edit new ticket

            //        * NewTicket => display TicketForm component
            //          - TicketForm => display form to add new ticket

  render(){
    // const history = <history>;
    // console.log('MY API :  ',apiURL);
    return (
      <>
      <BrowserRouter>
     <Switch>
      <Route path={'/'} exact component={Login}/> 
      <Route
          path="/register"
          render={() => <Register  history={this.props.history}  />}
        />
    <AuthComponent>
    <Route path={'/CustomerHeader'} component={CustomerHeader}/> 
      <Route path={'/WorkerHeader'} component={WorkerHeader}/>
      <Route path={'/home'} component = {CustomerHome} />
      </AuthComponent>
        </Switch>
      </BrowserRouter>
      </>
    );
  }
}