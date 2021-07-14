import React from 'react'
import {useState} from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import '../css/login.css';
import { useDispatch,useSelector } from 'react-redux';
import { fetchAuthAsync } from '../actions/auth/authActions';
export default function Login() {
      const [form,setForm] = useState(null);
      const dispatch = useDispatch();
      const {loading,error} = useSelector(state => state.status)

      const handleSubmit = (e) => {
        e.preventDefault();
        const {username,password} = e.target.elements;
        const data ={
          username:username.value,
          password:password.value,
        }
        if(loading){
          alert('Loading....')
        }
        if(error){
          alert(error)
        }
       
       return dispatch(fetchAuthAsync(data))
      } 
    return (
        <div className="container">
            <br />
            <h1>เข้าสู่ระบบ</h1>
          <div className="gridLogin">
          
          <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Usename</label>
            <input name="username"   placeholder='Username' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input name="password"  type="password" placeholder='Password' />
          </Form.Field>
          <Button type='submit' >Submit</Button>
        </Form>
        </div>
        <br />
        <br />
        </div>
    )
}
