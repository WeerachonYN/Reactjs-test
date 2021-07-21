import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { Image, Button, Icon, Placeholder, Label, Grid, Loader, Divider, Header, Segment, Input, Item } from 'semantic-ui-react';
import { addToCart } from '../redux/actions/cartActions'
import '../css/viewDetail.css';
import { Container } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { FETCH_CART_REQ, FETCH_PRODUCT_REQ } from '../redux/Reducer/action.type';
import { useSelector } from 'react-redux';
import { fetchProductAsync } from '../redux/actions/productAction';
import Carousels from '../component/Carousel';
export default function ViewDetail() {
    const { paramId } = useParams();

    const action = (type, payload, token) => dispatch({ type, payload, token })
    // const post = useFetch(`/product/${paramId}/`);

    const history = useHistory();
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth)
    const { data } = useSelector(state => state.product)
    const { loading, error } = useSelector(state => state.cart)
    const [quantity, setQuantity] = useState(1);
    const [active, setActive] = useState(null);

    const handleclickCheckUser = () => {
        if (!token) {
            history.push('/login/');
        } else {
            // console.log('user=',user.access);
            const payload = { ...data, quantity: quantity }
            action(FETCH_CART_REQ, payload, token)
            //    setActive('active')
            // console.log(payload);
            // dispatch(addToCart({ ...data, quantity: 1 }))
        }
    }

    useEffect(() => {

        dispatch({ type: FETCH_PRODUCT_REQ, payload: paramId })
        // action(FETCH_PRODUCT_REQ, paramId)
    }, [paramId])

    if (!data) {
        return <div />;
    }
     document.title = `PRODUCT : ${data.name}`
    return (
        <Container>
            <Segment>
                <Grid columns='equal' >
                    <Grid.Column width={8} textAlign="justified">
                        {data.product_image.length > 0 ? <Carousels /> : <Image src={data.image.medium_square_crop} size='large' />}
                    </Grid.Column>
                   
                    <Grid.Column >
                        {loading ? (<Placeholder>
                            <Placeholder.Header>
                                <Placeholder.Line length="long" />
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

                                <div>
                                    <br />
                                    <Input type='text' type="number" min="1" value={quantity} onChange={e => setQuantity(e.target.value) | 1} actionPosition='left'>
                                        <Button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}>-</Button>
                                        <input />

                                        <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
                                    </Input>
                                    <br />
                                    {error ?
                                        <Label basic color='red' pointing>

                                            {error.error?.product || error.error?.quantity || error.msg}
                                        </Label>
                                        : <div />}
                                </div>
                            </div>)}
                    </Grid.Column>
                </Grid>
            </Segment>
        </Container>
    )
}
