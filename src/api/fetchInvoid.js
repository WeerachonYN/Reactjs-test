import axios from "axios";
export async function CheckInvoid({ token }) {
  // console.log('token check out', token.access);


  const data = {}

 
  const response = await axios.post('/checkout/', data, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token.access}`
    }
  }

  );
  // console.log('INVOID_RESPONSE:', response.data);
  return response.data

}

export async function GetInvoid({ token, status }) {
  // console.log('token_INVOID',token);

  let config = {}
  if (status) {
    config = {
      headers: {
        Authorization: `Bearer ${token.access}`
      },
      params: { status: status }
    }
  } else {
    config = {
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    }
  }


  const response = await axios.get('/invoice/', config);
 
  return response.data

}

export async function GetDetailInvoid({ token, id }) {
  const config = {
    headers: {
      Authorization: `Bearer ${token.access}`
    }
  };
  const response = await axios.get(`/invoice/${id}/`, config);
  return response.data?.data

}


export async function Submitvoid({ token, id }) {
  try {

    const config = {
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    };
    const data ={}
    const response = await axios.post(`/invoice/${id}/void/`,data, config);
    // console.log('RESPONSE_FETCH', response.data);
    return response.data
  } catch (error) {
    console.log(error);
  }
}