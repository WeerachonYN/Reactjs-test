import React from 'react'
import '../css/header.css'
import { Button } from 'semantic-ui-react'

import {Link} from'react-router-dom';
export default function Header() {
   

    return (
        <div className="Header">
            <div className="column">
            <h1>Header</h1>
            <Button.Group>
           
          <Link to="/"><Button>Home</Button></Link> 
          <Link to="/api"><Button>ProductAll</Button></Link> 
          <Link to="/login"><Button>Login</Button></Link> 
            </Button.Group>
            
            </div>
            </div> 
    )
}

