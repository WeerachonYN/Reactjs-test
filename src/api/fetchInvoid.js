import axios from "axios";
export async function CheckInvoid({ token }) {
  // console.log('token check out', token.access);

  const config = {
    headers: {
      Authorization: `Bearer ${token.access}`
    }
  };
  const data = {}

  console.log('log:', config);
  const response = await axios.post('/checkout/', data,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token.access}`
    }
  }

  );
  console.log('INVOID_RESPONSE:', response.data);
  return response.data

}

export async function GetInvoid( token ) {
  console.log('token_INVOID',token);


  const config = {
    headers: {
      Authorization: `Bearer ${token.access}`
    }
  };
  const data ={}

  const response = await axios.get('/invoice/',config);
  // console.log('RESPONSE_FETCH', response.data);
  return response.data

}
export async function GetDetailInvoid({ token, id }) {
    const config = {
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    };
    const response = await axios.get(`/invoice/${id}/`, config);
    return response.data
  
}
export async function Submitvoid({ token, id }) {
  try {

    const config = {
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    };

    const response = await axios.post(`/invoice/${id}/void/`, config);
    // console.log('RESPONSE_FETCH', response.data);
    return response.data
  } catch (error) {
    console.log(error);
  }
}