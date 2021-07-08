import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
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
    return history.push(`/${msg}/`);
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
            name='Register'
            active={state === 'Register'}
            onClick={handleClick}
          />
            <Menu.Item
            name='Todo'
            active={state === 'Todo'}
            onClick={handleClick}
          />
            <Menu.Item
            name='Logout'
            active={state === 'Logout'}
            onClick={()=> localStorage.clear()}
          />
        </Menu>
      </Segment>
    )

}
// import React from 'react'
// import '../css/header.css'
// import { Button } from 'semantic-ui-react'

// import {Link} from'react-router-dom';
// export default function Header() {
   

//     return (
//         <div className="Header">
//             <div className="column">
//             <h1>Header</h1>
//             <Button.Group>
           
//           <Link to="/"><Button>Home</Button></Link> 
//           <Link to="/api"><Button>ProductAll</Button></Link> 
//           <Link to="/login"><Button>Login</Button></Link> 
//             </Button.Group>
            
//             </div>
//             </div> 
//     )
// }

