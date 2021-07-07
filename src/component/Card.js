import React from 'react'
import '../css/Card.css'
import { Card, Icon, Image } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';

function CardProduct(props) {
  let history = useHistory();
  const handleClick = () => {
    return history.push(`/ViewDetail/${props.id}`);
  }
  return (

    // <Popup
    // content={props.detail}
    // key={props.id}
    // header={props.title}
    // trigger={

    <Card className="Card" key={props.id}>
      {/* (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) */}
      <Image onClick={handleClick} className="imageCard" src={props.image} wrapped ui={false} />
      <Card.Content>

        {/* <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length='very short' />
                      <Placeholder.Line length='medium' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>

                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                  </Placeholder> */}
        <Card.Header className="card-Header" onClick={handleClick} >{props.title}</Card.Header>
        <Card.Description >
          {props.detail}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a key={props.id} onClick={handleClick}>
          <Icon name='comment' />
          10 Comments
        </a>
      </Card.Content>
    </Card>
    // }>

    /* <Popup.Header>User Rating</Popup.Header>
    <Popup.Content>
    <Rating icon='star' defaultRating={3} maxRating={4} />
    </Popup.Content> */
    /* </Popup> */
  );
}

export default CardProduct