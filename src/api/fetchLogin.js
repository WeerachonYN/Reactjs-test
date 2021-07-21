import axios from "axios";
export async function authUser(data) {
      const userData = await axios.post('/token/',data);
      return  userData
  
  }