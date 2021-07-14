import axios from 'axios';
import {React,useEffect,useState} from 'react'
import { Grid, Segment } from 'semantic-ui-react'
export default function Counter () {
    let currentDate = new Date();
    const [currentUser,setCurrentUser] = useState({});
    const [isCurrentUser,setIscurrentUser] = useState(false);
    const [counter,setCounter] = useState(0); 
    const [token,setToken] = useState(
        () => {
            const access_token = JSON.parse(localStorage.getItem('token'));
            if (access_token) {
                return access_token.access;
            } else {
                return [];
            }
        }
    );
    // arrow fucn
    useEffect(() => {
        const config = {
            headers:{
                Authorization:`Bearer ${token}`
            }
        };

        axios.get('/users/',config).then(
            res => {
                setCurrentUser(res.data);
                setIscurrentUser(true);
             }
        ).catch(error => {
          setIscurrentUser(false);
            console.log(error);
        })
    }, [token])

        return (
            <div>
            <Grid.Column width={16}>
            <Segment>
            <h1>Home Page</h1>
                <p>{counter}</p>
                <button onClick={()=> setCounter(counter + 1)} type = "button"> + </button>
            </Segment>
            </Grid.Column>
           {isCurrentUser?<Grid.Column width={8}>
            <Segment>
            <h1>Hi, {currentUser.username}</h1>
            <h4>First Name: {currentUser.first_name}</h4>
            <h4>Last Name: {currentUser.last_name}</h4>
           {currentUser.email??<h4>Email: {currentUser.email}</h4>} 
            </Segment>
            </Grid.Column>:<div />}
           
            </div>
        );
  
}
