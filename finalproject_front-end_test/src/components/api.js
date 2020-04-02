import apiURL from'../APIconfig';
import axios from 'axios';

// Get All Ticket
export const getAllTicket = () => {
  return axios.get(`${apiURL}/emp/allTickets`);
}
// Get ALl Emp SendTickets By Emp ID
export const getEmpSendTickets = (id) => {
    return axios.get(`${apiURL}/emp/SendTickets/${id}`);
  } 
// Get ALl Emp ReceivedTickets By Emp ID
export const getReceivedTickets = (id) => {
    return axios.get(`${apiURL}/emp/ReceivedTickets/${id}`);
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
  //Add new Employee
export const AddNewEmployee = req => {
  return axios({
    method: 'POST',
    url: apiURL + '/emp/register',
    data:{
      empFullName:req.empFullName,
        email: req.email,
        empUsername:req.empUsername,
        password: req.password,
        empPhone: req.empPhone,
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