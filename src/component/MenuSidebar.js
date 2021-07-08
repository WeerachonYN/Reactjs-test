import React from 'react'
import { Menu } from 'semantic-ui-react'
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
export default function MenuSidebar() {
    const [state,setState] = useState('');
    const history = useHistory();
    const handleClick = (event) => {
      const msg = event.target.textContent;
      setState(msg)
      if (msg==="Home"){
        return history.push("/");
      }
      return history.push(`/${msg}/`);

    }
    const post = useFetch("http://127.0.0.1:8000/category/");
            console.log(post);
    if (!post.data){
        return <div />;
    }
    return (
        <Menu pointing secondary vertical>
            
          <Menu.Item
            name='home'
            active={state === 'home'}
            onClick={handleClick}
          />
          
        </Menu>
      )
}
