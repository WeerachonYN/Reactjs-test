import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />

const ListInvoid = (props) => {
    return (
       
          <Item>
            <Item.Image src='/images/wireframe/image.png' />
            <Item.Content>
              <Item.Header as='a'>12 Years a Slave</Item.Header>
              <Item.Meta>
                <span className='cinema'>Union Square 14</span>
              </Item.Meta>
              <Item.Description>{paragraph}</Item.Description>
              <Item.Extra>
                <Label>IMAX</Label>
                <Label icon='globe' content='Additional Languages' />
              </Item.Extra>
            </Item.Content>
          </Item>
      
      )
}

export default ListInvoid