import React from 'react'
import { Image, List, Item } from 'semantic-ui-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useHistory } from 'react-router-dom'
import '../css/ListHorizontal.css'
const ListHorizontal = (props) => {
  const history = useHistory()
  
  return (

    <List.Item key={props.id}  onClick={()=>history.push(`/product/${props.product}/`)}>
      <Image avatar src={props.image} size="tiny" className="image-invoidDetail" />
      
      <List.Content>
        <List.Header as='a'>{props.name}</List.Header>
        {/* <Item.Meta> {props.detail}</Item.Meta> */}
        <Item.Meta>x {props.quantity}</Item.Meta>
      </List.Content>
    </List.Item>

  )
}

export default ListHorizontal