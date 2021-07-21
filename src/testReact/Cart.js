import React from 'react';
import { Icon, Table, Image, Header, Container, Statistic, Input, Button, Confirm } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart } from '../redux/actions/cartActions';
import { DELETE_CART_REQ, UPDATE_CART_REQ, CHECK_INVOID_REQ } from '../redux/Reducer/action.type';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CartEmpty from '../component/CartEmpty';
export default function Cart() {
    const { cart } = useSelector(state => state.cart)
    const { token } = useSelector(state => state.auth)
    const { dataAll } = useSelector(state => state.product)
    const { error } = useSelector(state => state.invoid)
    const [quantity, setQuantity] = useState(0)
    const [id, setId] = useState(null)
    const history = useHistory()
    const [open, setOpen] = useState(false)
    const [open_checkout, setOpen_checkout] = useState(false)
    const action = (type, payload, token) => dispatch({ type, payload, token })
    const dispatch = useDispatch()
    document.title = "CART"
    const handleUpdateInput = (value, _id) => {

        console.log('Event:', value);
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
            return history.push('/')
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
        return <Container textAlign="center">
            < CartEmpty />
        </Container>
    }
    return (
        <Container textAlign='center'>
            <Table selectable fixed>
                <Table.Header >
                    <Table.Row>
                        <Table.HeaderCell>Products</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Quantity</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Price</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>

                    {cart.map((item) =>

                        <Table.Row key={item.id}>
                            <Table.Cell>
                                <Header as='h4' image>

                                    {/* <Image src={image.image.medium_square_crop}  size='big' /> */}
                                    <Header.Content>
                                        {item.name}
                                        <Header.Subheader>{item.detail}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>


                            <Table.Cell textAlign="center" >
                                <div>

                                    <Button
                                        onClick={() =>
                                            item.quantity > 0
                                                ? handleUpdate(item.id, item.quantity - 1)
                                                : item.quantity}>
                                        -
                                    </Button>

                                    <Input type="number" style={{ width: "80px" }}
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

                                    <Button onClick={() => handleUpdate(item.id, item.quantity + 1)}>+</Button>


                                </div>
                            </Table.Cell>
                            <Table.Cell textAlign='center'>{item.price}</Table.Cell>
                            <Table.Cell textAlign='center'><a style={{ cursor: 'pointer' }} onClick={() => action(DELETE_CART_REQ, item.id, token)}><Icon name='trash' color="red" size='large' /></a></Table.Cell>
                        </Table.Row>
                    )}

                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell>รวม</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>{cart.reduce((sum, item) => sum + item.quantity, 0)}</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>{cart.reduce((sum, item) => sum + (item.quantity * item.price), 0).toFixed(2)}</Table.HeaderCell>
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
