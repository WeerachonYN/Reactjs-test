import React from 'react';
import { Icon, Table, Image, Header, Container, FeedSummary } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart } from '../actions/cart/cartActions';
export default function Cart() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    if (!cart) {
        <p>Cart is empty</p>
    }
    console.log(cart);
    return (
        <Container textAlign='center'>
            <Table selectable>
                <Table.Header >
                    <Table.Row>
                        <Table.HeaderCell>Products</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>

                    {cart.map(item =>

                        <Table.Row key={item.id}>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src={item.image.small_square_crop} size='medium' />
                                    <Header.Content>
                                        {item.name}
                                        <Header.Subheader>{item.detail}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>{item.quantity}</Table.Cell>
                            <Table.Cell>{item.price}</Table.Cell>
                            <Table.Cell><a onClick={() => dispatch(deleteCart(item.id))}><Icon name='cancel' size='small' /></a></Table.Cell>
                        </Table.Row>
                    )}

                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell>รวม</Table.HeaderCell>
                        <Table.HeaderCell>{cart.reduce((sum,item) => sum + item.quantity, 0)}</Table.HeaderCell>
                        <Table.HeaderCell>{cart.reduce((sum,item) => sum + (item.quantity*item.price), 0).toFixed(2)}</Table.HeaderCell>
                        <Table.HeaderCell />
                    </Table.Row>
                </Table.Footer>
            </Table>
        </Container>
    )
}
