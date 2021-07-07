import React from 'react'
import '../css/Card.css'
import { Card, Icon, Image,Popup } from 'semantic-ui-react'

function  CardProduct (props) {
           console.log(props);
  return (
    <Popup
    content={props.detail}
    key={props.id}
    header={props.title}
    trigger={
<Card className="Card" key={props.id}>
    <Image className="imageCard"  src={props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header >{props.title}</Card.Header>
    
      <Card.Description >
     {props.detail}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='comment' />
        10 Comments
      </a>
    </Card.Content>
  </Card>
}>
{/* #popup ratting */}
{/* <Popup.Header>User Rating</Popup.Header>
<Popup.Content>
<Rating icon='star' defaultRating={3} maxRating={4} />
</Popup.Content> */}
</Popup>
  );
}

export default CardProduct