import axios from "axios";
export async function fetchCategory() {
 
    const response = await axios.get('/category/');
    // console.log('CATEGORY RESPONSE', response.data.data.results);
    return response.data.data.results

}
