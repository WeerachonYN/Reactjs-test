import React, { useState } from 'react'
import '../css/Card.css'
import { Image, Popup, Card, Icon,Label, Transition } from 'semantic-ui-react'
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
    // <Grid.Column> 

    <Popup
      content={props.detail}
      key={props.id}
      header={props.title}
      trigger={



        <Card centered className="Card" color="red" key={props.id}>
          {/* <Image onClick={handleClick} className="imageCard" src={props.image} wrapped ui={false} /> */}
          <LazyLoadImage
            onClick={handleClick}
            effect="blur"
            className="imageCard"
            wrapped ui={false}
            src={props.image} />
            
            
          <Card.Content>
            <Card.Header className="card-Header" onClick={handleClick} >{props.title}</Card.Header>  
            <Card.Description >
              {props.detail}
              
            </Card.Description>
            <Card.Meta >
              <h2>฿ {props.price}</h2>
            
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <p onClick={handleClick}>
              <Icon name='comment' />
              10 Comments
            </p>
          </Card.Content>
        </Card>

      }>

    </Popup>

    // </Grid.Column>
  );
}

export default CardProduct
