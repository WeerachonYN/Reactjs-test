import React from 'react'
import TabInvoid from '../component/TabInvoid'
import ListInvoid from '../component/ListInvoid'
import { Item, Container, Segment, Sidebar, Label, Sticky, Menu, Icon, Card } from 'semantic-ui-react'
import '../css/Invoid.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../component/Card'
import { FETCH_INVOID_REQ } from '../redux/Reducer/action.type'
import { useState } from 'react'
import Breadcrumbs from '../component/Breadcrumb'
export default function Invoid() {
    document.title = "METRO - INVOID"
    const { token } = useSelector(state => state.auth)
    const { invoid, count } = useSelector(state => state.invoid)
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch();
    // console.log(invoid);
    useEffect(() => {
        dispatch({ type: FETCH_INVOID_REQ, token: token })

    }, [])

    if (!invoid) {
        return <h1> Loading...</h1>
    }

    return (
        <Container fluid>
              <br />
            <Breadcrumbs category="Invoid" /> 
            <br />
            <div className="invoid-tab">
                <TabInvoid />
            </div>
            <Item.Group divided>

                {invoid.map(item =>
                    //    console.log(item);
                    <Segment clearing color='grey'  >

                        {item.status === 'Wait' && <Label as='a' color='blue' ribbon onClick={() => dispatch({ type: FETCH_INVOID_REQ, token: token, status: item.status })}>
                            {item.status}
                        </Label>}
                        {item.status === 'Success' && <Label as='a' color='green' ribbon onClick={() => dispatch({ type: FETCH_INVOID_REQ, token: token, status: item.status })}>
                            {item.status}
                        </Label>}
                        {item.status === 'Cancel' && <Label as='a' color='red' ribbon onClick={() => dispatch({ type: FETCH_INVOID_REQ, token: token, status: item.status })}>
                            {item.status}
                        </Label>}
                        <ListInvoid
                            count={count}
                            id={item.id}
                            user={item.user}
                            created={item.created_datetime}
                            updated={item.updated_datetime}
                            total={item.total}
                            invoices_item={item.invoices_item}

                            status={item.status}
                        />
                    </Segment>

                )}

            </Item.Group>

        </Container >
    )
}
