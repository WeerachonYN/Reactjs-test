import React, { useDebugValue, useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector ,useDispatch} from 'react-redux'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import { Item, Image, Form, Input, Loader, Dimmer, Container, TextArea, Segment, Divider, Header, Label, Grid } from 'semantic-ui-react'
import '../css/invoidDetail.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Breadcrumbs from '../component/Breadcrumb'
import CommentTag from '../component/CommentTag'
import { GET_INVOID_REQ,CATEGORY_IN_REQ } from '../redux/Reducer/action.type'
export default function InvoidDetail() {
    // const { data_in } = useSelector(state => state.invoid)
    const { user, token } = useSelector(state => state.auth)
    const [color, setColor] = useState('grey');
    const [random, setRandom] = useState(0);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
  
    const { id } = useParams()
    const history = useHistory()
    const fetDetail = async (id) => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token.access}`
                }
            }
            const response = await axios.get(`/invoice/${id}/`, config);
            setData(response.data)
        } catch (e) {
            console.log(e);
        }


    }

    useEffect(() => {
        fetDetail(id)
        document.title = `INVOID - ${id}`

        setRandom(Math.floor(Math.random() * 100))
    }, [id])
    const handleFilter = (id) => {
        dispatch({ type: CATEGORY_IN_REQ, category_in: id });
        return history.push(`/product/?category_in=${id}`)
      }
    if (!data) {
        return <div />
    }
    return (
        <div className="invoid-detail">

            <Container  fluid >
                <br/>
                <Breadcrumbs />
                <br />
                <Divider horizontal>
                    <Header as='h2'>
                        รายละเอียดคำสั่งซื้อ
                    </Header>
                </Divider>
                <br />
                <Segment>
                    {data.data.status === 'Wait' && <Label as='a' className="label-invoid" color='blue' ribbon onClick={() => history.push('/invoid/')}>
                        {data.data.status}
                    </Label>}
                    {data.data.status === 'Success' && <Label as='a' className="label-invoid" color='green' ribbon onClick={() => history.push('/invoid/')}>
                        {data.data.status}
                    </Label>}
                    {data.data.status === 'Cancel' && <Label as='a' className="label-invoid" color='red' ribbon onClick={() => history.push('/invoid/')}>
                        {data.data.status}
                    </Label>}

                    <Header as='h2' floated='right'>
                        No . {data.data.id}
                    </Header>

                    <Divider clearing />
                    <Item.Group >
                        {data.data.invoices_item.map(item =>
                            <Item key={item.id}>
                                <Item.Image    >


                                    <LazyLoadImage
                                        onClick={() => history.push(`/product/${item.product.id}/`)}
                                        effect="blur"
                                        size='small' as='a'
                                        className="imageCard"
                                        wrapped ui={false}
                                        src={item.product.image.medium_square_crop} />

                                </Item.Image>
                                <Item.Content verticalAlign='middle'>
                                    <Grid>
                                        <Grid.Column width={11} verticalAlign="middle">

                                            <Item.Header as='a' onClick={() => history.push(`/product/${item.product.id}/`)}>{item.product.name}</Item.Header>

                                            <Item.Meta>รายละเอียด</Item.Meta>
                                            <Item.Description>
                                                {item.product.detail}
                                            </Item.Description>
                                            <Item.Extra>
                                                <Label size="medium" color="orange" >฿ {item.product.price}</Label>
                                                <Label size="medium" className="labe-category" icon='cube' content={item.product.category} color="teal" onClick={()=> handleFilter(item.product.category_id)} />



                                            </Item.Extra>
                                        </Grid.Column>
                                        <Grid.Column width={5} textAlign="right" verticalAlign="middle" >
                                            <Item.Extra >
                                                <Item.Description>

                                                    X {item.quantity}

                                                </Item.Description>
                                            </Item.Extra>
                                            <Item.Extra >
                                                <Item.Description>

                                                     ฿ {(item.quantity*item.product.price).toFixed(2)}

                                                </Item.Description>
                                            </Item.Extra>

                                        </Grid.Column>
                                    </Grid>

                                    <Divider />

                                </Item.Content>

                            </Item>
                        )}
                        </Item.Group>
                </Segment>
                <Segment.Group>
                    <Segment >
                        <Header as='h3' >
                            ที่อยู่ในการจัดส่ง
                        </Header>
                    </Segment>
                    <Segment.Group>
                        <Segment >
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='ชื่อ' placeholder={user.first_name} readOnly />
                                    <Form.Input fluid label='นามสกุล' placeholder={user.last_name} readOnly />
                                </Form.Group>
                            </Form>
                        </Segment>
                        <Segment>
                            <Header as='h5' floated='left'>
                                ที่อยู่
                            </Header>

                            <Divider clearing />
                            <Form>
                                <TextArea placeholder='Address...' style={{ minHeight: 100 }} readOnly />
                            </Form>
                        </Segment>
                        <Segment>

                            <Form >
                                <Form.Group inline className="form-group-invoid">
                                    <Form.Field>
                                        <label>เบอร์โทร</label>
                                        <Input placeholder='(xxx)'readOnly />
                                    </Form.Field>
                                    <Form.Field>
                                        <Input placeholder='xxx' readOnly />
                                    </Form.Field>
                                    <Form.Field>
                                        <Input placeholder='xxxx' readOnly/>
                                    </Form.Field>
                                </Form.Group>
                            </Form></Segment>
                    </Segment.Group>
                    <Segment.Group>
                        <Segment.Group horizontal  >
                            <Segment textAlign="right" className="segment-invoid"><p>รวมค่าสินค้า</p></Segment>
                            <Segment textAlign="right" className="segment-invoid"><p>฿ {data.data.total}</p></Segment>
                        </Segment.Group>
                        <Segment.Group horizontal >
                            <Segment textAlign="right" className="segment-invoid"><p>ค่าจัดส่ง</p></Segment>
                            <Segment textAlign="right" className="segment-invoid"><p>฿ {random}</p></Segment>
                        </Segment.Group>
                    </Segment.Group>
                    <Segment.Group>
                        <Segment textAlign="right"className="segment-invoid"><p>ยอดคำสั่งซื้อทั้งหมด</p></Segment>
                        <Segment textAlign="right"className="segment-invoid">
                            <Header as='h4' color="orange" >
                                ฿ {(random + parseFloat(data.data.total)).toFixed(2)}
                            </Header>
                        </Segment>
                    </Segment.Group>
                </Segment.Group>
            </Container>
        </div>
    )
}
