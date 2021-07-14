import React from 'react';
import { Menu, Segment,Input} from 'semantic-ui-react';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
export default function Header (){
  const [state,setState] = useState('');
 
  const history = useHistory();

  const handleClick = (event) => {
    const msg = event.target.textContent;
  
    if (msg==="Home"){
      setState(msg)
      return history.push("/");
    }
      setState(msg)
      return history.push(`/${msg.toLowerCase()}/`);
      
  }
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='Home'
            active={state === 'Home'}
            onClick={handleClick}
          />
          <Menu.Item
            name='Product'
            active={state === 'Product'}
            onClick={handleClick}
          />
            <Menu.Item
            name='Todo'
            active={state === 'Todo'}
            onClick={handleClick}
          />
              <Menu.Item
             name='Youtube'
             active={state === 'Youtube'}
             onClick={handleClick}
           />
       

       <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>

          </Menu.Menu>
        </Menu>
          </Segment>
      
    )

}
