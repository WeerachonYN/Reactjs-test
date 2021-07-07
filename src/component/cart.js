import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

function  CardExampleImageCard (props) {
           console.log(props);
  return (
<Card>
    <Image src={props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      {/* <Card.Meta>Joined in 2016</Card.Meta> */}
      <Card.Description>
     {props.detail}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>

  );
}

export default CardExampleImageCard