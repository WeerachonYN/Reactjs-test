import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { Image, Button, Icon, Placeholder } from 'semantic-ui-react';
import '../css/viewDetail.css';
import { Container } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cart/cartActions';
import { useSelector } from 'react-redux';
import { fetchProductAsync } from '../actions/product/productAction';
import Carousels from '../component/Carousel';
export default function ViewDetail() {
    const { paramId } = useParams();

    // const post = useFetch(`/product/${paramId}/`);

    const history = useHistory();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth)
    const { data } = useSelector(state => state.product)
    const { loading, error } = useSelector(state => state.status)
    console.log('post=', data);
    const handleclickCheckUser = () => {
        if (!user) {
            history.push('/login/');
        } else {
            dispatch(addToCart({ ...data, quantity: 1 }))
        }
    }

    useEffect(() => {
        dispatch(fetchProductAsync(paramId))
    }, [paramId])

    if (!data) {
        return <div />;
    }
    if(error){
        alert('message:',error)
    }
    return (
        <Container>

            <div className="row-detail">

                <div className="col-detail">
                    {data.product_image.length > 0? <Carousels /> : <Image src={data.image.medium_square_crop} size='large' />}
                </div>
                <div className="col">
                    {loading ? (<Placeholder>
                        <Placeholder.Header>
                            <Placeholder.Line length="long"/>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />

                        </Placeholder.Header>
                    </Placeholder>)
                        : (<div><h1>{data.name}</h1>
                            <h3>รายละเอียดสินค้า</h3>
                            <h4>ราคา {data.price} บาท</h4>
                            <p>{data.detail}</p>
                            <Button animated onClick={handleclickCheckUser} color='green'>
                                <Button.Content visible>Add to cart</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='cart' />
                                </Button.Content>
                            </Button>
                        </div>)}
                        

                </div>

            </div>



        </Container>
    )
}
