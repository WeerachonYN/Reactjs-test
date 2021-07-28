import axios from "axios";
export async function authUser(data) {
      const userData = await axios.post('/token/',data);
      return  userData
  
  }

export async function getUser(data) {
    const config = {
        headers:{
            Authorization:`Bearer ${data.access}`
        }

    };
      const response = await axios.get('/users/',config);
      return  response.data
  
  }