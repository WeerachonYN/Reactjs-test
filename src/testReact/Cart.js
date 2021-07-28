import React from 'react';
import { Icon, Table, Image, Header, Container, Statistic, Input, Button, Confirm } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart } from '../redux/actions/cartActions';
import { DELETE_CART_REQ, UPDATE_CART_REQ, CHECK_INVOID_REQ, SEARCH_WORD_REQ, SORT_WORD_REQ, CATEGORY_IN_REQ } from '../redux/Reducer/action.type';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumbs from '../component/Breadcrumb';
import CartEmpty from '../component/CartEmpty';
import '../css/Cart.css'
export default function Cart() {
    const [word, setWord] = useState('');
    const { cart } = useSelector(state => state.cart)
    const { token } = useSelector(state => state.auth)

    const { error } = useSelector(state => state.invoid)
    const [quantity, setQuantity] = useState(0)
    const [id, setId] = useState(null)
    const history = useHistory()
    const [open, setOpen] = useState(false)
    const [open_checkout, setOpen_checkout] = useState(false)
    const action = (type, payload, token) => dispatch({ type, payload, token })
    const dispatch = useDispatch()
    document.title = "CART"

    const host = process.env.REACT_APP_API_HOST;

    const handleUpdateInput = (value, _id) => {

        // console.log('Event:', value);
        if (!isNaN(value)) {
            handleUpdate(_id, value)
        }

    }


    const handleUpdate = (_id, quantity) => {

        if (quantity == 0) {
            setId(_id)
            setOpen(true)
        } else {
            return action(UPDATE_CART_REQ, { id: _id, quantity: quantity }, token)
        }
    }




    const handleConfirm = (type) => {
        if (type === 'checkout') {
            dispatch({ type: CHECK_INVOID_REQ, token: token })
            setOpen_checkout(false)
            return history.push('/invoid/')
        } else if (type === 'update') {
            action(UPDATE_CART_REQ, { id: id, quantity: quantity }, token)
            setOpen(false)
            return
        }

    }
    const handleCancel = () => {
        setOpen(false)
        setOpen_checkout(false)
    }


    if (cart.length == 0) {
        return <Container fluid>
            <br />
            <Breadcrumbs category="Cart" />
            <br />
            < CartEmpty
            />
        </Container>
    }
    return (
        <Container fluid>
            <br />
            <Breadcrumbs category="Cart" />
            <br />
            <Table selectable fixed>
                <Table.Header >
                    <Table.Row>
                        <Table.HeaderCell>รูปสินค้า</Table.HeaderCell>
                        <Table.HeaderCell>สินค้า</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>ราคาต่อชิ้น</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>จำนวน</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>ราคารวม</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>ลบ</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>

                    {cart.map((item) =>

                        <Table.Row key={item.id}>
                            <Table.Cell >
                                <Header as='h4' image>
                                    <Image src={host + item.product.image.medium_square_crop} size='large' className="img-table" onClick={() => history.push(`/product/${item.product.id}/`)} />
                                    
                                </Header>
                            </Table.Cell>
                            <Table.Cell >
                                <Header as='h3' >

                                    <Header.Content verticalAlign="top">
                                        {item.product.name}
                                        <Header.Subheader verticalAlign="top">{item.product.detail}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.HeaderCell textAlign='center'>{item.product.price}</Table.HeaderCell>

                            <Table.Cell textAlign="center" >
                                <div className="btn-groupza">

                                    <Button style={{ width: "80px", margin: 0 }}
                                        onClick={() =>
                                            item.quantity > 0
                                                ? handleUpdate(item.id, item.quantity - 1)
                                                : item.quantity}>
                                        -
                                    </Button>

                                    <Input type="number" style={{ width: "90px", height: "auto" }}
                                        //   defaultValue={item.quantity}
                                        value={item.quantity}
                                        onChange={(e) => {
                                            if (!isNaN(e.target.value)) {
                                                handleUpdateInput(e.target.value, item.id)
                                            }
                                        }
                                        }

                                    >
                                        {/* <input  onC={(e)=> handleUpdateInput(e,item.id)}/> */}
                                    </Input>

                                    <Button style={{ width: "80px", margin: 0 }} onClick={() => handleUpdate(item.id, item.quantity + 1)}>+</Button>


                                </div>
                            </Table.Cell>
                            <Table.Cell textAlign='center'>{(item.product.price * item.quantity).toFixed(2)}</Table.Cell>
                            <Table.Cell textAlign='center'><a style={{ cursor: 'pointer' }} onClick={() => action(DELETE_CART_REQ, item.id, token)}><Icon className="icon-trash" name='trash' color="red" size='large' /></a></Table.Cell>
                        </Table.Row>
                    )}

                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell>รวม</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>{cart.reduce((sum, item) => sum + item.quantity, 0)}</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>{cart.reduce((sum, item) => sum + (item.quantity * item.product.price), 0).toFixed(2)}</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'><Button color="green" content='Check Out' onClick={() => setOpen_checkout(true)} /></Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
            <Confirm size='mini'
                open={open}
                content='คุณต้องการลบสินค้า ?'
                cancelButton='ยกเลิก'
                confirmButton="ลบสินค้า"
                onCancel={() => handleCancel()}
                onConfirm={() => handleConfirm('update')}
            />
            <Confirm size='mini'
                open={open_checkout}
                content='ยืนยันคำสั่งซื้อ ?'
                cancelButton='ยกเลิก'
                confirmButton="ยืนยัน"
                onCancel={() => handleCancel()}
                onConfirm={() => handleConfirm('checkout')}
            />
        </Container>
    )
}
