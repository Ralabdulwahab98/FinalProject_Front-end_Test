import apiURL from'../APIconfig';
import axios from 'axios';

// Get All Service
export const getAllService = () => {
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
export const closeService = (id) => {
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
export const AddNewService = (req,id) => {
  return axios({
    method: 'POST',
    url: apiURL + `/${id}`,
    data:{
      ServiceType: req.ServiceType,
      ServiceDescription:  req.ServiceDescription,
      ServiceState: "open",
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