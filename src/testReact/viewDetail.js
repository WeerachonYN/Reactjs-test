import React from 'react'
import { useParams } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import useFetch from '../api/useFetch';
import '../css/viewDetail.css';
import {Container} from 'semantic-ui-react'
export default function ViewDetail() {
    const {paramId} = useParams();
    const post = useFetch(`/${paramId}/`);

    if (!post.data){
        return <div />;
    }
    return (
        <Container>
            <div className="row">
               
                <div className="col">
                <Image src={post.data.data.image.medium_square_crop} wrapped ui={false} />
                </div>
                <div className="col-detail">
                <h1>รายละเอียดสินค้า</h1>
            <h2>{post.data.data.name}</h2>
            <h4>ราคา {post.data.data.price} บาท</h4>
            <p>{post.data.data.detail}</p>
                </div>

            </div>
            <hr />
            <ul>
                {post.data.data.product_image.map(element => (
                    <li key={element.id}>
                        <Image src={element.image.medium_square_crop} wrapped ui={false} />
                    </li>
                ))}
            </ul>
            
            </Container>
    )
}
