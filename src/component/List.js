import React from 'react'
import { Image, List } from 'semantic-ui-react'

const ListHorizontal = (props) => (

    <List.Item key={props.id}>
      <Image avatar src={props.image} />
      <List.Content>
        <List.Header>{props.name}</List.Header>
        {props.detail}
      </List.Content>
    </List.Item>

)

export default ListHorizontal