import axios from "axios";

export async function fetchCart({ payload, token }) {
 
    const config = {
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    };

    let response =  await axios.post('/cart/',
      {
        product: payload.id,
        quantity: payload.quantity
      },
      config
    );
    return response.data;

 

}
export async function fetchLoginCart( payload ) {
  try {
  
    const config = {
      headers: {
        Authorization: `Bearer ${payload.access}`
      }
    };

    const response = await axios.get('/cart/', config);
    // console.log('RESPONSE_FETCH', response.data);
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export async function DeleteCart({ payload,token }) {
  try {
  console.log('id for delete',payload);
  console.log('token for delete',token);
    const config = {
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    };

    const response = await axios.delete(`/cart/${payload}/`, config);
    console.log('RESPONSE_FETCH', response.data);
    return response.data
  } catch (error) {
    console.log(error);
  }
}
export async function UpdateCart({ payload,token }) {
  try {
  console.log('id for Update',payload);
  console.log('token for Update',token);
    const config = {
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    };

    const response = await axios.patch(`/cart/${payload.id}/`,{
      quantity: payload.quantity
    }, config);
    console.log('RESPONSE_FETCH', response.data);
    return response.data
  } catch (error) {
    console.log(error);
  }
}
