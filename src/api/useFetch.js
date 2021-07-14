import {useState,useEffect} from 'react';
import axios from 'axios';
export default function useFetch(url) {
    const [data ,setData] = useState([]);
    
    useEffect(() => {
        axios.get(url).then(response => {
            setData(response)
        })
    }, [])

    return data
}
