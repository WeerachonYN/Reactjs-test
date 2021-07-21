import React from 'react'
import {useState} from 'react';
import { Button, Form,Message,Dimmer,Segment,Loader } from 'semantic-ui-react'
import '../css/login.css';
import { useDispatch,useSelector } from 'react-redux';
import {FETCH_AUTH_REQ,FETCH_PRODUCT_ALL_REQ} from '../redux/Reducer/action.type';
import {useHistory } from 'react-router-dom';

export default function Login() {
      const [active,setActive] = useState(null);
      const dispatch = useDispatch();
      const {loading,error} = useSelector(state => state.auth)
      const {token} = useSelector(state => state.auth)
      const history = useHistory();
      document.title = "LOGIN"
      const action = (type,payload)=>dispatch({type,payload})
      const handleSubmit = (e) => {
        e.preventDefault();
        const {username,password} = e.target.elements;
        const data ={
          username:username.value,
          password:password.value,
        }
       
        // dispatch({type:FETCH_PRODUCT_ALL_REQ})
        action(FETCH_AUTH_REQ,data)
       if(!error){
         return history.push('/')
       }
      } 
      // if(token){
       
      //   return history.push('/product/')
      // }
    return (
        <div className="container">
            <br />
            <Segment >
            <h1 className="h1-login">เข้าสู่ระบบ</h1>
          <div className="gridLogin">
          
          <Form onSubmit={handleSubmit} >
          <Form.Field >
            <label>Usename</label>
            <input name="username"   placeholder='Username' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input name="password"  type="password" placeholder='Password' />
          </Form.Field>
          <Button  type='submit'color='instagram' >Submit</Button>
        </Form>
       {error? <Message error className="msg-login">
    <Message.Header>{error.code}</Message.Header>
    <p>{error.msg}</p>
  </Message>:<div/>}
        </div>
        <br />
        </Segment>
        <br />
        </div>
    )
}
