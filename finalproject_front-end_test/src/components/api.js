import apiURL from'../APIconfig';
import axios from 'axios';

// Find all service depend on WorkerId
export const WorkerService = (id) =>{
  return axios.get(`${apiURL}/service/${id}`);
}
// Get ALl Emp RequestService By cus ID
export const getRequestService = (id) => {
    return axios.get(`${apiURL}/customer/RequestService/${id}`);
  } 
// Get ALl Customer ReceivedTickets By cus ID
export const getReceivedServices = (id) => {
    return axios.get(`${apiURL}/customer/ReceivedService/${id}`);
  } 
// Get all service depend on UserId and if the ServiceState is closed
export const getAllClosedService = (id) => {
  return axios.get(`${apiURL}/Find/All/closed/Service/${id}`);
} 
// Get all service depend on UserId and if the ServiceState is Waiting
export const getAllServiceInWaitingList = (id) => {
  return axios.get(`${apiURL}/Find/All/Waiting/Service/${id}`);
} 
// Get all service depend on UserId and if the ServiceState is OnProgress
export const getAllServiceInOnProgress = (id) => {
  return axios.get(`${apiURL}/Find/All/OnProgress/Service/${id}`);
}   
// Find all User info depend on Id
export const userInfo = (id) =>{
  return axios.get(`${apiURL}/customer/${id}`);
}  


//delete One Service 
export const deleteOneService = (id) => {
  return axios({
    method: 'delete',
    url: apiURL + `/DeleteTicket/${id}`,
  })
}  

//close ServiceState 
export const closeService = (id) => {
  return axios({
    method: 'patch',
    url: apiURL + `/UpdateService/${id}`,
    data:{
      ServiceState: 'Closed',
    }
  })
}  
//On progress Serviec 
export const OnProgressService = (id ,req) => {
return axios({
  method: 'patch',
  url: apiURL + `/UpdateService/${id}`,
  data:{
    ServiceState: 'OnProgress',
  }
})
}
export const WaitingService = (id ,req) => {
  return axios({
    method: 'patch',
    url: apiURL + `/UpdateService/${id}`,
    data:{
      ServiceState: 'Waiting',
    }
  })
  }  
  //Add new Customer
export const AddNewCustomer = req => {
  return axios({
    method: 'POST',
    url: apiURL + '/customer/register',
    data:{
      // req
        FullName: req.FullName,
        Email: req.Email,
        Username:req.Username,
        password: req.password,
        Phone: req.Phone,
        UserType: req.UserType,
        Worker: req.Worker
    }
  })
}

//Add new Tickect 
export const AddNewService = (req,id) => {
  return axios({
    method: 'POST',
    url: apiURL + `/${id}`,
    data:{
      // req
      ServiceType: req.ServiceType,
      ServiceDescription:  req.ServiceDescription,
      ServiceState: "Open",
    }
    
  });
}
//Update Service 
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

export const AddPriceToTheService = (req,id) => {
  return axios({
    method: 'patch',
    url: apiURL + `/PassService/${id}`,
    data:{
      ServicePrice: req.ServicePrice,
      ServicesEmp: req.ServicesEmp
    }
    
  })
}

