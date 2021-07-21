import axios from "axios";
export async function fetchProduct(paramsId) {
  try {
    // const token = payload.access;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // };

    const response = await axios.get(`/product/${paramsId}/`);
    
    console.log('RESPONSE_FETCH', response.data);
    return response.data
  } catch (error) {
    console.log(error);
  }
}
export async function ProductALL(payload) {
  console.log('Search value:',payload);
    
    
    const response = await axios.get('/product/',{params: {
      is_enabled: true,
      category__in:null,
      category_not_in:null,
      sort:null,
      // search:payload,

    }});
    console.log('RESPONSE_FETCH_ALL', response.data.data.results);
    return response.data.data.results
 
}