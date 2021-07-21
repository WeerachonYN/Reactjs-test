import React from 'react'
import { Icon, Segment, Grid, Divider, Header, Search, Button } from 'semantic-ui-react'
export default function CartEmpty() {
    return (
        <Segment placeholder>
            <h1>ไม่มีสินค้าในตะกร้า</h1>
            <br/>
            <Search placeholder='Search สินค้าเพิ่มเติม...' />
        </Segment>
    )
}
