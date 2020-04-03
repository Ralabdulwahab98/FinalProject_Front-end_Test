import apiURL from'../APIconfig';
import axios from 'axios';

// Get All Ticket
export const getAllTicket = () => {
  return axios.get(`${apiURL}/customer/allTickets`);
}
// Get ALl Emp RequestService By cus ID
export const getRequestService = (id) => {
    return axios.get(`${apiURL}/customer/RequestService/${id}`);
  } 
// Get ALl Customer ReceivedTickets By cus ID
export const getReceivedServices = (id) => {
    return axios.get(`${apiURL}/customer/ReceivedService/${id}`);
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
    url: apiURL + '/customer/register',
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
export const UpdateService = (req,id) => {
  return axios({
    method: 'patch',
    url: apiURL + `/UpdateService/${id}`,
    data:{
      ServiceType:req.ServiceType,
      ServiceDescription: req.ServiceDescription,
      ServiceState: req.ServiceState,
    }
    
  })
}