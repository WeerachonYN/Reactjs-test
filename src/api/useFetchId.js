import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function useFetch(url) {
    const {paramId} = useParams();
    const [data ,setData] = useState([]);

    const getByparams = (Id) => {
        axios.get(url,{
            params:Id
          }).then(response => setData(response))
         
       }
    useEffect(() => {
        getByparams(paramId);
    }, [])

    return data
}
