import React from 'react'
import TabInvoid from '../component/TabInvoid'
import ListInvoid from '../component/ListInvoid'
import { Item,Container,Segment } from 'semantic-ui-react'
import '../css/Invoid.css'
export default function Invoid() {
    document.title = "INVOID"
    return (
        <Container>
        <div className="invoid-tab">
            <TabInvoid/>
        </div>
            <Item.Group divided>
                <Segment>
            <ListInvoid  />
            </Segment>
            </Item.Group>
        </Container>
    )
}
