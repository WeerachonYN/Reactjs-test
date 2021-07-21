import axios from 'axios';
import {React,useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import { Grid, Segment } from 'semantic-ui-react'
export default function Counter () {
    let currentDate = new Date();
    const [currentUser,setCurrentUser] = useState({});
    const [isCurrentUser,setIscurrentUser] = useState(false);
    const [counter,setCounter] = useState(0); 
    const {token} = useSelector(state => state.auth)

    useEffect(() => {
        document.title = "HOME"
        console.log('token',token);
        const config = {
            headers:{
                Authorization:`Bearer ${token?.access||token}`
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
