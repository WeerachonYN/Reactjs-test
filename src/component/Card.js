import React, { useState } from 'react'
import '../css/Card.css'
import { Image, Popup, Card, Icon, Label, Transition,Placeholder, Rating } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function CardProduct(props) {
  let history = useHistory();
  // const [stateImage, setStateImage] = useState(null)
  const handleClick = () => {

    return history.push(`/product/${props.id}/`);
  }
  return (

    <Popup
      content={<Rating icon='star' defaultRating={3} maxRating={4} />}
      key={props.id}
      header={props.title}
      disabled={props.loading}
      trigger={

        <Card centered className="Card" color="red" key={props.id}>
          {props.loading ? (
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          ) : (
            <LazyLoadImage
              onClick={handleClick}
              effect="blur"
              className="imageCard"
              wrapped ui={false}
              src={props.image} />
          )}

          <Card.Content>
            {props.loading ? (
              <Placeholder>
                <Placeholder.Header>
                  <Placeholder.Line length='very short' />
                  <Placeholder.Line length='medium' />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
              </Placeholder>
            ) : (
              <Card.Content>
                <Card.Header className="card-Header" as="h3" onClick={handleClick} >{props.title}</Card.Header>
                <Card.Description className="card-descript">
                  {props.detail}

                </Card.Description>
                <Card.Meta >
                  <h2 className="h2-price">฿ {(props.price).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h2>

                </Card.Meta>
              </Card.Content>
            )}
          </Card.Content>

          <Card.Content extra textAlign="center">
            <p className="comment-p" onClick={handleClick}>
              <Icon name='comment' className="comment-icon" />
              {props.loading?0:props.comment} Comments
            </p>
          </Card.Content>
        </Card>
      }>

    </Popup>

    // </Grid.Column>
  );
}

export default CardProduct
