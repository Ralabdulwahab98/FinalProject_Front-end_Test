import apiURL from'../APIconfig';
import axios from 'axios';

// Get All Ticket
export const getAllTicket = () => {
  return axios.get(`${apiURL}/customer/allTickets`);
}
// Get ALl Emp SendTickets By Emp ID
export const getEmpSendTickets = (id) => {
    return axios.get(`${apiURL}/customer/SendTickets/${id}`);
  } 
// Get ALl Emp ReceivedTickets By Emp ID
export const getReceivedTickets = (id) => {
    return axios.get(`${apiURL}/customer/ReceivedTickets/${id}`);
  } 
//close Ticket 
export const closeTicket = (id) => {
    return axios({
      method: 'patch',
      url: apiURL + `/UpdateTicket/${id}`,
      data:{
        TicketState: 'closed',
      }
    })
  }  
//delete Ticket 
export const deleteTicket = (id) => {
    return axios({
      method: 'delete',
      url: apiURL + `/DeleteTicket/${id}`,
    })
  }  
  //Add new Customer
export const AddNewCustomer = req => {
  return axios({
    method: 'POST',
    url: apiURL + '/customer/register',
    data:{
        FullName: req.FullName,
        email: req.email,
        Username:req.Username,
        password: req.password,
        Phone: req.empPhone,
    }
    
  })
}
//Add new Tickect 
export const AddNewTicket = (req,id) => {
  return axios({
    method: 'POST',
    url: apiURL + `/${id}`,
    data:{
      TicketType:req.TicketType,
      TicketDescription: req.TicketDescription,
      TicketState: req.TicketState,
    }
    
  });
}
//Update Ticket 
export const UpdateTicket = (req,id) => {
  return axios({
    method: 'patch',
    url: apiURL + `/UpdateTicket/${id}`,
    data:{
      TicketType:req.TicketType,
      TicketDescription: req.TicketDescription,
      TicketState: req.TicketState,
    }
    
  })
}