import {useState,useEffect} from 'react';
import axios from 'axios';
export default function usePost(url,objectData) {
    const [data ,setData] = useState([]);
    useEffect(() => {
        axios.post(url, objectData)
          .then(response => setData(response))
          .catch(function(error){
            console.log(error);
          });
    }, [])

    return data
}