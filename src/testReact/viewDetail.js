import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { Image } from 'semantic-ui-react';

export default function ViewDetail() {
    const [post, setPost] = useState({});
    const {paramId} = useParams();
    const getapiId = (theparamId) => {
         axios.get(`http://127.0.0.1:8000/product/${theparamId}/`).then(result => {
            const response = result.data.data;
            console.log(response);
            setPost(response);
        })
    }
    useEffect(() => {
        getapiId(paramId);
    }, []);
    return (
        <div className="container">
            <h1>Params = {paramId}</h1>
             {/* <Image src={post.image.thumbnail}  wrapped ui={false} />  */}
           <h2>{post.name}</h2>
           <p>{post.detail}</p>
        </div>
    )
}
