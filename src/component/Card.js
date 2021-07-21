import React,{useState} from 'react'
import '../css/Card.css'
import {  Image, Popup, Card, Icon,Transition } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';
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
            <Image onClick={handleClick} className="imageCard" src={props.image}  wrapped ui={false} />
            <Card.Content>
              <Card.Header className="card-Header" onClick={handleClick} >{props.title}</Card.Header>
              <Card.Description >
                {props.detail}
              </Card.Description>
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
